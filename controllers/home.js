const express = require('express');
const fetch = require('node-fetch');
const PocketBase = require('pocketbase/cjs');

const POCKER_URL =  (typeof process.env.POCKET_URL == "undefined"|| process.env.POCKET_URL == null) ? 'http://127.0.0.1:8090':process.env.POCKETBB_URL;
const pb = new PocketBase(POCKER_URL);
const router = express.Router();



router.get("/", function (req, res) {
  res.render("index.ejs");
});

router.post('/', async (req, res) => {
    try {
      const pocketBaseUrl = POCKER_URL;
      const collectionName = 'basic_plan';
      const apiUrl = `${pocketBaseUrl}/api/collections/${collectionName}/records`;
    
  
      const {
        id,
        Full_name,
        phone_number,
        email,
      } = req.body;
  
    
      
      
      const data = {
        id,
        Full_name,
        email,
        phone_number,
        
      };
      
      
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
  
     
  
  
      const responseData = await response.json();
  
      if (response.status === 400) {
        res.send('Invalid data');
      }else{
        console.log(data)
        res.send(`
        <script>
          alert('Successfully registered!');
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
