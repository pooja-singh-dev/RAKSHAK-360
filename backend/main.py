from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def home():
    return {"message": "Rakshak-360 Backend is Running!"}
@app.get("/check-url")
def check_url(url: str):
    if "phishing.com" in url:
        return {"status": "DANGEROUS"}
    return {"status": "SAFE"}