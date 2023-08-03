const express = require('express');
const fetch = require('node-fetch');
const PocketBase = require('pocketbase/cjs');
const pb = new PocketBase('https://pocketbase-001.betterlevelgroup.com/api');
const router = express.Router();





router.post('/', async (req, res) => {
    try {
      const pocketBaseUrl = 'https://pocketbase-001.betterlevelgroup.com/api';
      const collectionName = 'newsletter';
      const apiUrl = `${pocketBaseUrl}/api/collections/${collectionName}/records`;
    
  
      const {
        id,
        email,
      } = req.body;

      
      const data = {
        id,
        
        email,
        
        
      };
      

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
  
      const responseData = await response.json();
  
      if (response.status === 200) {
        res.send(`
        <script>
          alert('Successfully subscribed!');
          window.location.href = '/home';
        </script>
      `);

      }
  
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports = router;