const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};
app.use(express.static(path.join(__dirname, "client", "build")));

const uri = process.env.ATLAS_URI; 
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology: true , useCreateIndex:true });



//create a connection and open it
const connection = mongoose.connection 
connection.once('open', () => {
    console.log("MongoDb database connection established successfully ")
})

//const signupRouter = require('./routes/rsignup')
//const loginRouter  = require('./routes/rlogin')
const userRouter  = require('./routes/users')

//app.use('/signup', signupRouter)
//app.use('/login', loginRouter)
app.use('/users', userRouter);
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
}); 

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// Error Handler
app.use((error, req, res, next) => {
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data // Passing original error data
  res.status(status).json({ message: message, data: data })
});

//DB connection
app.listen(port, ()=>{
    console.log(`Express server listening on port ${port}`)
})


