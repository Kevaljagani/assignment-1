const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const mongoose = require('mongoose')
const readline = require('readline');
const expressLayout = require('express-ejs-layouts')
const http = require('http').createServer(app)

const url = 'mongodb://localhost/assignment';
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});


// read port no from user 
const port_no = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

port_no.question('What is your desired port no? ', (answer) => {
	if(answer == 0)
	{
		console.log("Choose Another Port No")
	}
	else{
		console.log(`Requested Port No is : ${answer}`);
		http.listen(answer)
		console.log(`Listening on port ${answer}`)
 		 port_no.close();
	}
  
});



app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

require('./routes/api')(app)

app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
require('./routes/api')(app)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



