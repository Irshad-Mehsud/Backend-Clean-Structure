import express from 'express';
import routes from './src/routes/index.js';
import mongoose from 'mongoose';
import  ENV  from './src/constants/index.js';
import chalk from 'chalk';
const app = express();
app.use(express.json());

//============MongoDB connection==============
mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASSWORD}@irshadcluster.w5dqwxs.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=IrshadCluster`);
mongoose.connection.on('connected', () => {
  console.log(chalk.white.bgGreen('------Connected to MongoDB----'));
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use("/api", routes);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
export default app;

