from fastapi import FastAPI, HTTPException, Depends, Response, Cookie
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector
import logging
from typing import Optional

app = FastAPI()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class User(BaseModel):
    player_account: str
    player_password: str

db_config = {
    'user': 'root',
    'password': 'a12345',
    'host': 'db',
    'database': 'bombman_db'
}
origins = [
    "http://127.0.0.1:8081",
    "http://localhost:8081",
    "http://localhost:3000",
    "http://host.docker.internal:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/register/")
async def register_user(user: User):
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO users (account, password) VALUES (%s, %s)",
            (user.player_account, user.player_password)
        )
        conn.commit()
        cursor.close()
        conn.close()
        return {"message": "User registered successfully"}
    except mysql.connector.Error as err:
        logger.error(f"Error: {err}")
        raise HTTPException(status_code=500, detail=f"Database error: {err}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        raise HTTPException(status_code=500, detail=f"Unexpected error: {e}")

@app.post("/login/")
async def login_user(user: User, response: Response):
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        cursor.execute(
            "SELECT * FROM users WHERE account = %s AND password = %s",
            (user.player_account, user.player_password)
        )
        result = cursor.fetchone()
        cursor.close()  # 确保在查询结果后关闭游标
        conn.close()

        if result:
            response.set_cookie(key="player_account", value=user.player_account)
            return {"message": "Login successful, redirecting...", "redirect_url": "http://localhost:3000"}
        else:
            return {"message": "Invalid credentials"}
    except mysql.connector.Error as err:
        logger.error(f"Error: {err}")
        raise HTTPException(status_code=500, detail=f"Database error: {err}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        raise HTTPException(status_code=500, detail=f"Unexpected error: {e}")

@app.get("/user-info/")
async def user_info(player_account: Optional[str] = Cookie(None)):
    if not player_account:
        raise HTTPException(status_code=401, detail="User not logged in")
    return {"player_account": player_account}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8080, reload=True)
