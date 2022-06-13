import { Knex } from "knex";
import { Finding } from "../models/finding";
import { Item } from "../models/item";

const items = [
    {
      id: 1,
      status: "Queued",
      repository_name: "repository_name 1",
      findings: [
        {
          item_id: 1,
          finding_type: "sast",
          rule_id: "G402",
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
          item_id: 1,
          finding_type: "sast",
          rule_id: "G404",
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
      ].map(json => Finding.fromJson(json)),
      queued_at: "6-8-2022",
      scanning_at: "6-8-2022",
      finished_at: "6-8-2022"
    },
    {
      id: "2",
      status: "Queued",
      repository_name: "repository_name 2",
      findings: [
        {
          item_id: 2,
          finding_type: "sast",
          rule_id: "G402",
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
          item_id: 2,
          finding_type: "sast",
          rule_id: "G404",
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
      ].map(json => Finding.fromJson(json)),
      queued_at: "6-8-2022",
      scanning_at: "6-8-2022",
      finished_at: "6-8-2022"
    },
    {
      id: "3",
      status: "Queued",
      repository_name: "repository_name 3",
      findings: [
        {
          finding_type: "sast",
          item_id: 3,
          rule_id: "G402",
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
          finding_type: "sast",
          rule_id: "G404",
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
      ].map(json => Finding.fromJson(json)),
      queued_at: "6-8-2022",
      scanning_at: "6-8-2022",
      finished_at: "6-8-2022"
    }
].map(json => Item.fromJson(json));
  
export async function seed(knex: Knex): Promise<void> {
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        console.log('item', item);
        if (!item.findings) return;
        // const newItems = await knex("items").insert(item).returning("*");
        const newFindings = item.findings.map((finding: Finding) => ({
            ...finding,
            item_id: item.id
        }));
        console.log('fff', newFindings);
        await knex("findings").insert(newFindings);
    }
}