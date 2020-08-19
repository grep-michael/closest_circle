const express = require('express');
const app = express();
const helmet = require('helmet');
const port = 80;
app.use(helmet());


app.use(express.static(__dirname + '/public'));
app.get('/', (req,res) => {
    res.sendFile();
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})