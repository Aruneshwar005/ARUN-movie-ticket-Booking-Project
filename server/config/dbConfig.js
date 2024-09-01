const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// Corrected the environment variable name to match the .env file
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('MongoDB Connection Successful');
});

connection.on('error', (err) => {
    console.log('MongoDB Connection Failed:', err);
});
