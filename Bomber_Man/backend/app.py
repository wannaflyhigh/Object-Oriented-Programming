from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector
import bcrypt

# Database Connection
db = mysql.connector.connect(
    host="localhost:3306",
    user="root",
    password="a12345",
    database="bombman_db"
)

app = FastAPI()

class User(BaseModel):
    user_account: str
    user_password: str

@app.post("/register/")
async def register(user: User):
    cursor = db.cursor()
    try:
        hashed_password = bcrypt.hashpw(user.user_password.encode('utf-8'), bcrypt.gensalt())
        query = "INSERT INTO user_info (player_account, hashed_password) VALUES (%s, %s)"
        values = (user.user_account, hashed_password)
        cursor.execute(query, values)
        db.commit()
        return {"message": "User registered successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Error registering user: {str(e)}")
    finally:
        cursor.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
