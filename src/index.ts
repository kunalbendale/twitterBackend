import express from "express";
import userRoutes from "./routes/userRoutes";
import tweetRoutes from "./routes/tweetRoutes";

const app = express();
app.use(express.json());
app.use('/user',userRoutes);
app.use('/tweet',tweetRoutes);

app.get("/", (req, res) => {
  res.send("Hello world!");
});



const port = process.env.PORT || 9999;

app.listen(port, () => {
  console.log(`listening on the ${port}`);
});
