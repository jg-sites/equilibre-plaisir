/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 120,
  semi: false,
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  // Import order: external > internal (@/) > relative
  // <BUILTIN_MODULES> = node built-ins, <THIRD_PARTY_MODULES> = node_modules
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "^(react|react-dom)$",
    "^next(/.*)?$",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
}

export default config
