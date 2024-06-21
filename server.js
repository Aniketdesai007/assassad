const express=require('express');

const app=express();
app.get('/', (req, res) =>{
        res.send('Welcome');
});
app.listen(700,() =>{
    console.log('app is on port 700');
});