require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async ()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Hurray!Connection successful")
}).catch((err)=>{
    console.log(err);
});
}
module.exports = connectDB;