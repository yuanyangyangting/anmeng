module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: 'last 2 versions'
    }),

    require("postcss-import")({
      path: ["src/",'node_modules/']
    }),

    require('postcss-px2rem')({
      remUni: 75
    })
  ]
};