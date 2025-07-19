import { defineConfig } from 'vite';
import remix from '@remix-run/dev/vite';

export default defineConfig({
  plugins: [remix()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: ['bolt.pinseo.es'],
  },
});
