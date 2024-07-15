/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // 環境変数取得にSSRを利用する方法に切り替えるため、以下一度コメントアウト
  // env: {
  //   BASE_URI: process.env.BASE_URI,
  // },
};

export default nextConfig;
