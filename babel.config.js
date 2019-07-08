module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [">0.25%", "not ie 11", "not op_mini all"]
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-flow"
  ],
  env: {},
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: false }]
  ],
  babelrcRoots: "packages/*"
};
