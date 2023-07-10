import express from 'express';
import morgan from 'morgan';

const TODO: string = "start writing your Express API server here :)";
console.log(TODO);

const app = express()

app.get('/', function (req, res) {
  res.json({msg : 'Hello World -> questa risposta va al browser!'})
})

app.listen(3000, function(){
    console.log("il server è in ascolto alla porta 3000")
})