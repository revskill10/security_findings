import * as React from "react";
import { Header, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import defaultData from "./data/mock";

import type { ItemProps } from "./types";
export type DashboardProps = {
    itemUrl: (item: ItemProps) => string;
    data: ItemProps[];
}
export const Dashboard = ({
    itemUrl,
    data = defaultData
}: DashboardProps) => {
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Id</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>RepositoryName</Table.HeaderCell>
          <Table.HeaderCell>QueuedAt</Table.HeaderCell>
          <Table.HeaderCell>ScanningAt</Table.HeaderCell>
          <Table.HeaderCell>FinishedAt</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((item: ItemProps) => (
          <Table.Row key={item.id}>
            <Table.Cell>
                <Header as="h2" textAlign="center">
                  <Link to={itemUrl(item)}>{item.id}</Link>
                </Header>
            </Table.Cell>
            <Table.Cell singleLine>
              {item.status}
            </Table.Cell>
            <Table.Cell singleLine>
              {item.repositoryName}
            </Table.Cell>
            <Table.Cell singleLine>
              {item.queuedAt}
            </Table.Cell>
            <Table.Cell singleLine>
              {item.scanningAt}
            </Table.Cell>
            <Table.Cell singleLine>
              {item.finishedAt}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
export * from "./types";