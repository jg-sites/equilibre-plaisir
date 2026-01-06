import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import eslintConfigPrettier from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"
import { defineConfig } from "eslint/config"

const eslintIgnore = [
  ".git/**",
  ".next/**",
  "node_modules/**",
  "dist/**",
  "build/**",
  "coverage/**",
  "*.min.js",
  "*.config.js",
  "*.d.ts",
]

export default defineConfig([
  {
    ignores: eslintIgnore,
  },
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    settings: {
      tailwindcss: {
        callees: ["classnames", "clsx", "ctl", "cn", "cva"],
      },
    },
    rules: {
      // TS
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // React - désactiver les règles trop strictes pour le français
      "react/no-unescaped-entities": "off",

      // Imports - désactivé car géré par Prettier via @ianvs/prettier-plugin-sort-imports
      "sort-imports": "off",
      "import/order": "off",

      // Prettier - exécuté via ESLint
      "prettier/prettier": "error",
    },
  },

  // Ignorés officiels de eslint-config-next, via globalIgnores (doc Next)
  eslintConfigPrettier,
])
