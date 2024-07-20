interface Config {
  API_BASE_URI: string; // APIのベースURL
}

const config: Config = {
  // TODO 環境変数から取得する
  API_BASE_URI: "http://34.84.1.151"
};

export default config;