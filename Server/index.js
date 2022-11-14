const express = require('express');

const app = express();

const port = process.env.PORT || 3001;
app.get('/',(req, res) => {
    res.status(200).json({ok:true});
})
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/user',(req, res) => {
    console.log("Это POST!");
    res.status(200).json({ok:true});
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}!`)
});