module.exports = {
    petstore: {
      output: {
        mode: 'tags-split',
        target: 'src/index.ts',
        schemas: 'src/model',
        client: 'react-query',
        mock: true,
      },
      input: {
        target: './docs/openapi.yaml',
      },
    },
};