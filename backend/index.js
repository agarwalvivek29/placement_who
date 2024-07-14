const express = require('express');
const dbConnect = require('./dbConnect');
const cors = require('cors');
const aiRouter = require('./routes/ai');
const volatilityRouter=require('./routes/volatility');

require('dotenv').config();

const app = express();
dbConnect();

app.use(cors());
app.use(express.json());
app.use('/ai',aiRouter);
app.use('/volatility',volatilityRouter); 

app.get('/', (req, res) => {
    res.send('Server OK');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});