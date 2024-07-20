module.exports = {
  'api-client': {
    output: {
      mode: 'split',
      target: './src/api',
      client: 'swr',
      override: {
        mutator: {
          path: './src/lib/fetcher.ts',
          name: 'fetcher',
        },
      },
    },
  },
};