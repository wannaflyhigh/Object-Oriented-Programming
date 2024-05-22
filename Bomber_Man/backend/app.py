from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pymysql
import bcrypt

app = FastAPI()

# Configure CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set this to the domains you want to allow CORS for
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

class User(BaseModel):
    player_account: str
    player_password: str

mysql_config = {
    "host": "localhost",
    "user": "root",
    "password": "a12345",
    "database": "bombman_db",
}

def connect_to_mysql():
    try:
        conn = pymysql.connect(**mysql_config)
        return conn
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to connect to database")

@app.post("/register/")
async def register(request: Request, user: User):
    try:
        data = await request.json()
        user = User(**data)
    except Exception as e:
        raise HTTPException(status_code=422, detail="Validation error")

    conn = connect_to_mysql()
    try:
        with conn.cursor() as cursor:
            # Hash the password
            hashed_password = bcrypt.hashpw(user.player_password.encode('utf-8'), bcrypt.gensalt())
            # Insert user data into database
            query = "INSERT INTO user_info (player_account, hashed_password, coin_amount) VALUES (%s, %s, %s)"
            values = (user.player_account, hashed_password, 0)  # Set coin_amount to 0
            cursor.execute(query, values)
        conn.commit()
        return {"message": "User registered successfully"}
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Error registering user: {str(e)}")
    finally:
        conn.close()

@app.post("/login/")
async def login(user: User):
    conn = connect_to_mysql()
    try:
        with conn.cursor() as cursor:
            query = "SELECT hashed_password FROM user_info WHERE player_account = %s"
            cursor.execute(query, (user.player_account,))
            result = cursor.fetchone()
            if result:
                hashed_password = result[0]
                if bcrypt.checkpw(user.player_password.encode('utf-8'), hashed_password.encode('utf-8')):
                    return {"message": "Login successful"}
            raise HTTPException(status_code=401, detail="Invalid username or password")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error logging in: {str(e)}")
    finally:
        conn.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8080)
