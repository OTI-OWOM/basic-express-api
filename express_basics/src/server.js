const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Local server running at http://localhost:${PORT}`);
});
// Export the app for serverless deployment or testing
module.exports = app;