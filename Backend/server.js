import app from "./app.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config()
const allowedOrigins = [
  'http://localhost:5173', // For local development
  process.env.FRONTEND_URL, // For the deployed site
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));


app.listen(process.env.PORT , () => {
    console.log(`Server Listing on Port ${process.env.PORT}`);
})
