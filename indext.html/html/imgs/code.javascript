     const express = require('express');
     const app = express();
     app.use(express.json());

     // Mock data (replace with real database/API)
     const trackingData = { '12345': { status: 'In Transit' } };

     app.get('/api/track/:id', (req, res) => {
         const id = req.params.id;
         res.json(trackingData[id] || { status: 'Not Found' });
     });

     app.listen(3000, () => console.log('Server running on port 3000'));
     