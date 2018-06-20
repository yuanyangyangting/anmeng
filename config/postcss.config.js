module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: 'last 2 versions'
    }),

    require("postcss-import")({
      path: ["src/"]
    }),

    require('postcss-px2rem')({
      remUni: 75
    })
  ]
};