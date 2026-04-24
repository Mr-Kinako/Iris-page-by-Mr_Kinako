import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(() => {

    return {
        base: '/Iris-page-by-Mr_Kinako/',
        plugins: [
            react()
        ],
        publicDir: "public",
        server: {
            host: 'localhost',
            port: 3000,
            strictPort: true,
            open: false
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                "@styles": path.resolve(__dirname, "src/styles"),
                "@assets": path.resolve(__dirname, "src/assets")
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@styles/variables" as *;
                        @use "sass:color";
                        @use "sass:math";
                    `
                }
            }
        }
    };
});
