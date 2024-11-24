import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Or the plugin for your framework

export default defineConfig({
  plugins: [react()], // Use the appropriate plugin for your framework
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      input: 'index.html', // Ensure this is pointing to your index.html
    },
  },
});
