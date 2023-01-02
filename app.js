const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const PORT = process.env.PORT || 3001;
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const bookRouter = require("./routes/book");
const cors = require("cors");
const router = require("express").Router();
const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
dbConnect();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors(corsOption));
app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
