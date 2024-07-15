export type SsrConfig = {
  BASE_URI: string;
};

const checkConfig = (value: string) => {
  if (!value) {
    // TODO 環境変数が取得できない場合、Sentryでログを出せるようにする
  }
}

export const ssrConfig: SsrConfig = {
  get BASE_URI() {
    const value = process.env.BASE_URI || '';
    checkConfig(value);
    return value;
  },
};

const isServer = () => typeof window === 'undefined';

export const getSSRConfig = () => {
  if (!isServer()) {
    // TODO Sentryへのログを追加
    throw new Error('SSRのみで使用可能');
  }

  return ssrConfig;
};