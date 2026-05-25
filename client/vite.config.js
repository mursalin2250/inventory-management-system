<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
>>>>>>> 7103fd16d8e6f1bc917a4951486c1e75c9bbdf3c

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  server: {
    allowedHosts: [
      "8859-103-176-2-81.ngrok-free.app"
    ],
  }
=======
>>>>>>> 7103fd16d8e6f1bc917a4951486c1e75c9bbdf3c
})
