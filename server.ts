import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const publicDir = path.resolve(__dirname, 'public');
app.use(express.static(publicDir));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use((_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
