import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import mg from  'mailgun-js'
import cors from 'cors'

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import cartRouter from "./routes/bid.js";
import orderRouter from "./routes/order.js"
import ChartRouter from "./routes/chart.js"
import interviewRouter from "./routes/interview.js"
import awardRouter from "./routes/award.js"
const mailgun = () =>
  mg({
    apiKey:"859599d915fa441e29f10e69fab653a2-b0ed5083-3f74b603",
    domain: "sandboxe1b2249387344093ac8799baadfda590.mailgun.org",
  });

const app = express();
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use('/posts', postRoutes);
app.use('/interview', interviewRouter);
app.use('/award', awardRouter);
app.use("/user", userRouter);
app.use("/book",cartRouter);
app.use("/order",orderRouter);
app.use("/chart",ChartRouter);
// connection staring
// mail connection
app.post('/api/email', (req, res) => {
    const { email, subject, message } = req.body;
    mailgun()
      .messages()
      .send(
        {
          from: 'sethnkrumah86@gmail.com',
          to: `${email}`,
          subject: `${subject}`,
          html: `<p>${message}</p>`,
        },
        (error, body) => {
          if (error) {
            console.log(error);
            res.status(500).send({ message: 'Error in sending email' });
          } else {
            console.log(body);
            res.send({ message: 'Email sent successfully' });
          }
        }
      );
  });





const CONNECTION_URL = 'mongodb+srv://pbl:final@cluster0.tpd7w.mongodb.net/procurement?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

