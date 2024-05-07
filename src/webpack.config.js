const path = require('path');

module.exports = {
  // Autres configurations Webpack...
  resolve: {
    alias: {
      '@chatbot': path.resolve(__dirname, 'src/chatbot')
    }
  }
};
