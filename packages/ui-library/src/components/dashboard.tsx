import * as React from "react";
import { Header, Table } from "semantic-ui-react";
import type { ItemProps } from "items_service_client/dist/model";
export type DashboardProps = {
  renderElement: (item: ItemProps) => React.ReactElement<any, any>;
  data: ItemProps[];
}
export const Dashboard: React.FC<DashboardProps> = ({
  renderElement,
  data
}) => {
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
                  {renderElement(item)}
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
