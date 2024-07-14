import axios from 'axios';

const VOLATILITY_API_URL = 'http://localhost:5000/volatility';

export const executeCommand = async (memoryDumpId, command) => {
    const response = await axios.post(`${VOLATILITY_API_URL}/execute`, { memoryDumpId, command });
    return response.data.requestId;
};

export const getCommandResult = async (requestId) => {
    const response = await axios.get(`${VOLATILITY_API_URL}/result/${requestId}`);
    return response.data;
};
