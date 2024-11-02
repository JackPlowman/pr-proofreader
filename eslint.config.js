export default [
  {
    languageOptions: {
      globals: {
        chrome: true,
      },
    },
    plugins: ["github"], // Add this line
    extends: ["plugin:github/recommended"], // Add this line
  },
];
