import express from 'express';
import payment from './routes/paymentRoutes.js'
const app = express();
app.use(express.json());

app.use('/api/v1',payment)
export default app