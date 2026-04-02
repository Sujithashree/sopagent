// Backend entry point for OpsMind AI
// Week 1: Knowledge Ingestion (Upload & Embed)
// Week 2: Retrieval Engine (Finding the needle)

const express = require('express');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(express.json());
app.use('/admin', adminRoutes);

app.get('/', (req, res) => res.send('OpsMind AI backend running (local demo)'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// Backend entry point for OpsMind AI
// Week 1: Knowledge Ingestion (Upload & Embed)
// Week 2: Retrieval Engine (Finding the needle)

// ...implementation to be added...
