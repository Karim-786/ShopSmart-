const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://karimu:<password>@cluster0.8ri3y1s.mongodb.net/'

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017
