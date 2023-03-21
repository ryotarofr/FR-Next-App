/** @type {import('next').NextConfig} */
// const withImages = require("next-images");
// const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

// module.exports = withImages(withTM());

module.exports = {
  // nextConfig,
  transpilePackages: ["@stripe/firestore-stripe-payments"],

  // S3の静的ホスティングにおけるindex.htmlを生成する設定
  trailingSlash: true,

  reactStrictMode: true,
  swcMinify: true,

  webpack(config, { isServer }) {
    // svgを使うための記述
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // fs moduleを使うための記述
    // config.resolve.fallback = { fs: false };
    // if (!isServer) {
    //   config.node = {
    //     fs: "empty",
    //   };
    // }

    return config;
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.node = {
  //       fs: "empty",
  //     };
  //   }

  //   return config;
  // },
};
