// Require modules
const express = require('express');
	
// Create the Express app
const app = express();
	
// Configure the app (app.set)
	
	
// Mount middleware (app.use)
	
	
// Mount routes
app.get('/:chloe', function(req, res) {
    res.send(`${req.params.chloe}`);
  });
	
// Tell the app to listen on port 4000
app.listen(4000, function() {
    console.log('Listening on port 4000');
});
