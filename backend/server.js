import express from 'express';

const app = express();

const port =process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('server is ready!');
});

app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
})