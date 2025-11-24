import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/BoilerPlate-Landing-Page/',  // nome exato do repositório
})