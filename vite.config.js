import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/REACT-YourMealStore/',  // <-- сюда путь к твоей папке на хостинге, например '/myapp/'
  plugins: [react(), tailwindcss()],
})
