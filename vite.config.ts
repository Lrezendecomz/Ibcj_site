import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // 🔹 Define a base correta para os caminhos
  build: {
    outDir: 'build'
  },
  server: {
    historyApiFallback: true // 🔹 Tenta redirecionar as rotas para o index.html
  },
  preview: {
    historyApiFallback: true // 🔹 Corrige erro ao testar localmente
  }
});
