const mongoose = require('mongoose')
const URL = 'mongodb+srv://taiphuloc56:1234567@cluster-shopping.armngar.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    mongoose.connect(
      URL,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    console.log('Connected to mongoDB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}


module.exports= {connectDB}