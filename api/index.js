const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000; // Adjust as needed

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));


; app.get('/test', (req, res) => {
    res.json('test ok');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});