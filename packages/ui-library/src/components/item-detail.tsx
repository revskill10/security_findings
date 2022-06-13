import { ItemProps } from "items_service_client/dist/model";
import React from "react";
import { Header, Table } from "semantic-ui-react";
export type ItemDetailProps = {
  data: ItemProps;
}

export function ItemDetail(props: ItemDetailProps) {
  const { data } = props;
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>RuleId</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Severity</Table.HeaderCell>
          <Table.HeaderCell>Path</Table.HeaderCell>
          <Table.HeaderCell>Line number</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.findings.map((item) => (
          <Table.Row>
            <Table.Cell>
              <Header as="h2" textAlign="center">
                {item.ruleId}
              </Header>
            </Table.Cell>
            <Table.Cell singleLine>{item.metadata.description}</Table.Cell>
            <Table.Cell singleLine>{item.metadata.severity}</Table.Cell>
            <Table.Cell singleLine>{item.location.path}</Table.Cell>
            <Table.Cell singleLine>
              {item.location.positions.begin.line}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
