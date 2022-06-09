import { ItemProps } from "../types"

const items: Array<ItemProps> = [
    {
      id: "1",
      status: "Queued",
      repositoryName: "RepositoryName 1",
      findings: [
        {
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