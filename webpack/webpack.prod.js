module.exports = {
  mode: "production",
  devtool: "hidden-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Cool hacker"),
    }),
  ],
};
