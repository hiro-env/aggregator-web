interface Config {
  API_BASE_URI: string; // APIのベースURL
}

const config: Config = {
  // TODO 環境変数から取得する
  API_BASE_URI: "http://35.187.218.42"
};

export default config;