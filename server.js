import express from "express";
import connectDB from "./data/database.js";
import session from "express-session";
import passport from "passport";
import { initializePassport } from "./passportConfig.js";
const app = express();

// db conncetion
connectDB();

// passport initializes
initializePassport(passport);

const sessionOptions = {
    secret: 'MUSECERETKEY',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day for example
      httpOnly: true,
    }
};

app.use(express.json());
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

// import routes
import userRoute from "./routes/userRoutes.js"

// routes
app.use("/api/v1/user", userRoute);

app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    console.log('Request Headers:', req.headers);
    next();
});


const port = 600;
app.listen(port,()=>{
    console.log("server is running");
})