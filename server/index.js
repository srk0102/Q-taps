const express = require("express");
const cors = require("cors");
const userRoute=require('./routes/userRoute')
const questionRoutes=require('./routes/questionRoute')
require ("./dbconnection/mongoose")


const app = express();
app.use(express.json());
app.use(cors());

app.use('/',userRoute)
// app.use('/api',questionRoutes)



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});