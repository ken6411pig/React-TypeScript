import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/React-TypeScript/',  // 添加這行
  server: {
    host: '0.0.0.0',
  }
})
