import { defineConfig } from 'vite';
import remix from '@remix-run/dev/vite';

export default defineConfig({
  plugins: [remix()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: ['bolt.pinseo.es']
  }
});
