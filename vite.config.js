import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import eslint from "vite-plugin-eslint";
import vercel from "vite-plugin-vercel";
import viteImageMin from "vite-plugin-imagemin";

export default defineConfig({
    plugins: [
        tailwindcss(),
        vercel(),
        viteImageMin({
            mozjpeg: {
                quality: 50,
            },
            optipng: {
                optimizationLevel: 5,
            },
            webp: {
                quality: 50,
            },
        }),
    ],
});
