const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    },
  };

  if (isProd) {
    config.minimizer = [
      // new CssMinimizerPlugin(),
      new TerserPlugin(),
    ];
  }
  return config;
};

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {}
    },
    "css-loader",
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

module.exports = {
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './src/js/index.js'],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'gh-pages')
  },
  optimization: optimization(),
  devServer: {
    port: 4000,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : false,
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'about-us.html',
      template: './src/about-us.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'catalog.html',
      template: './src/catalog.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/contacts.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'galery.html',
      template: './src/galery.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'notFound.html',
      template: './src/notFound.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'questions.html',
      template: './src/questions.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'services.html',
      template: './src/services.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./src/icons", to: "icons" },
        { from: "./src/fonts", to: "fonts" },
        { from: "./src/img", to: "img" },

      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [

            ],
          }
        }
      },
    ],
  },
};