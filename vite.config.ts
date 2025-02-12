import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // 🔹 Garante que todas as rotas sejam tratadas corretamente
  build: {
    outDir: 'build'
  },
  server: {
    historyApiFallback: true  // 🔹 Ajuda no redirecionamento para evitar erro 404
  }
});
