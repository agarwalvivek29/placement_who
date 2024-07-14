from fastapi import FastAPI
from pydantic import BaseModel
from tensorflow.keras.models import load_model
import pickle

app = FastAPI()

# Load your ML model
model = load_model('model.h5')

# Load the scaler
with open('scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

class PredictionRequest(BaseModel):
    data: list  # Adjust according to your input data structure

@app.post('/predict')
def predict(request: PredictionRequest):
    # Scale the input data
    scaled_data = scaler.transform([request.data])  # Adjust as needed
    prediction = model.predict(scaled_data)
    return {"prediction": prediction.tolist()}  # Adjust response format as needed
