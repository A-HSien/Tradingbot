const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      // these should match tsconfig.paths.json
      "src": path.resolve(__dirname, "src/"),
    }
  },

}