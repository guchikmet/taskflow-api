const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

// JSON verilerini okumak için
app.use(express.json());

// API yönlendirmeleri
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`TASKFLOW API sunucusu http://localhost:${PORT} adresinde çalışıyor...`);
});