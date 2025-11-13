import globals from "globals";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
export default defineConfig([
    js.configs.recommended, // ✅ ajoute les règles de base d'ESLint
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
        },
        rules: {
            semi: ["error", "always"],
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
]);
