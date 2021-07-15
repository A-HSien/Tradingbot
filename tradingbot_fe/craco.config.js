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
    configure: (webpackConfig, { paths }) => { 
        paths.appBuild = webpackConfig.output.path = path.resolve('../tradingbot_web/public');
        return webpackConfig;
      },
    alias: {
      // these should match tsconfig.paths.json
      "src": path.resolve(__dirname, "src/"),
    }
  },

}