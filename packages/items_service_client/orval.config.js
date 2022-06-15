module.exports = {
    react_query_client: {
      output: {
        mode: 'tags-split',
        target: 'src/index.ts',
        schemas: 'src/model',
        client: 'react-query',
        mock: false,
        override: {
          mutator: {
            path: './custom-instance.ts',
            name: 'customInstance',
          },
        },
      },
      input: {
        target: './docs/openapi.yaml',
      },
    },
};