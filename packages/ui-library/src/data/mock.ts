import { ItemProps } from "items_service_client/dist/model"

const items: Array<ItemProps> = [
    {
      id: "1",
      status: "Queued",
      repositoryName: "RepositoryName 1",
      findings: [
        {
          id: "1",
          itemId: "1",
          type: "sast",
          ruleId: "G402",
          location: {
            path: "connectors/apigateway.go",
            positions: {
              begin: {
                line: 60
              }
            }
          },
          metadata: {
            description: "TLS InsecureSkipVerify set true.",
            severity: "HIGH"
          }
        },
        {
          id: "2",
          itemId: "1",
          type: "sast",
          ruleId: "G404",
          location: {
            path: "util/util.go",
            positions: {
              begin: {
                line: 32
              }
            }
          },
          metadata: {
            description:
              "Use of weak random number generator (math/rand instead of crypto/rand)",
            severity: "HIGH"
          }
        }
      ],
      queuedAt: "6-8-2022",
      scanningAt: "6-8-2022",
      finishedAt: "6-8-2022"
    },
    {
      id: "2",
      status: "Queued",
      repositoryName: "RepositoryName 2",
      findings: [
        {
          id: "3",
          itemId: "2",
          type: "sast",
          ruleId: "G402",
          location: {
            path: "connectors/apigateway.go",
            positions: {
              begin: {
                line: 60
              }
            }
          },
          metadata: {
            description: "TLS InsecureSkipVerify set true.",
            severity: "HIGH"
          }
        },
        {
          id: "4",
          itemId: "2",
          type: "sast",
          ruleId: "G404",
          location: {
            path: "util/util.go",
            positions: {
              begin: {
                line: 32
              }
            }
          },
          metadata: {
            description:
              "Use of weak random number generator (math/rand instead of crypto/rand)",
            severity: "HIGH"
          }
        }
      ],
      queuedAt: "6-8-2022",
      scanningAt: "6-8-2022",
      finishedAt: "6-8-2022"
    },
    {
      id: "3",
      status: "Queued",
      repositoryName: "RepositoryName 3",
      findings: [
        {
          id: "5",
          itemId: "3",
          type: "sast",
          ruleId: "G402",
          location: {
            path: "connectors/apigateway.go",
            positions: {
              begin: {
                line: 60
              }
            }
          },
          metadata: {
            description: "TLS InsecureSkipVerify set true.",
            severity: "HIGH"
          }
        },
        {
          id: "6",
          itemId: "3",
          type: "sast",
          ruleId: "G404",
          location: {
            path: "util/util.go",
            positions: {
              begin: {
                line: 32
              }
            }
          },
          metadata: {
            description:
              "Use of weak random number generator (math/rand instead of crypto/rand)",
            severity: "HIGH"
          }
        }
      ],
      queuedAt: "6-8-2022",
      scanningAt: "6-8-2022",
      finishedAt: "6-8-2022"
    }
];
  

export default items;