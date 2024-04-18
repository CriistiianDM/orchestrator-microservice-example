const cors = require('cors')
const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    try {
        const response1 = await axios.get('http://microservice-service:4000/');
        console.log(response1)
        const data1 = await response1.data;

        const response2 = await axios.get('http://microservice2-service:4001/');
        const data2 = await response2.data;

        res.json({ response1: data1, response2: data2 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
