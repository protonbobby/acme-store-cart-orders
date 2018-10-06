const app = require('./app');
const { syncAndSeed } = require('./db')
const PORT = process.env.PORT || 8753;

app.listen(PORT, () => {
  console.log('And we\'re live at http://localhost:8753')
})

syncAndSeed();
