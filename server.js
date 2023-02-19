import { handler } from './build/handler.js';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000

app.get('/.well-known/matrix/*', cors({ origin: '*' }));

app.use(handler);

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});