import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import cartRouter from "./routes/bid.js";
import orderRouter from "./routes/order.js"
import ChartRouter from "./routes/chart.js"
const app = express();
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.use("/book",cartRouter);
app.use("/order",orderRouter);
app.use("/chart",ChartRouter);
// connection staring
const CONNECTION_URL = 'mongodb+srv://pbl:final@cluster0.tpd7w.mongodb.net/procurement?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

