// vite.config.js
export default {
  server: {
    proxy: {
      '/questions': 'http://localhost:3001',
    },
  },
};
