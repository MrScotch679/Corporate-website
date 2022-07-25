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
      new CssMinimizerPlugin(),
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
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './js/index.js'],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'docs')
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
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'about-us.html',
      template: './about-us.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'catalog.html',
      template: './catalog.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './contacts.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'galery.html',
      template: './galery.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'notFound.html',
      template: './notFound.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'questions.html',
      template: './questions.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'services.html',
      template: './services.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "icons", to: "icons" },
        { from: "fonts", to: "fonts" },
        { from: "img", to: "img" },

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