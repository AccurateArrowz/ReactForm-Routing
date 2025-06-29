const express = require('express');
const app = express();
const router = require('./router')
const PORT = 5300;
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', userRoutes);

app.listen(5300, ()=>{
    console.log(`i am listening at port ${PORT}`);
})