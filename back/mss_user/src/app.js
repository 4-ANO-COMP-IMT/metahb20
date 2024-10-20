import express from 'express';
import cors from 'cors';
import routes from './routes/userRoutes.js';

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/api', routes);

app.get('/test', (req, res) => {
	res.send('Hello from test');
});

export default app;
