from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()

# Load your ML model
scaler = joblib.load('scaler.pkl')
# Load your actual model (if you have one)
# model = load_your_model_function('model.h5')  # Example for loading model

class PredictionRequest(BaseModel):
    data: list  # Adjust according to your input data structure

@app.post('/predict')
def predict(request: PredictionRequest):
    scaled_data = scaler.transform([request.data])  # Scale the input data
    prediction = model.predict(scaled_data)  # Ensure input shape matches your model
    return {"prediction": prediction.tolist()}  # Adjust response format as needed
