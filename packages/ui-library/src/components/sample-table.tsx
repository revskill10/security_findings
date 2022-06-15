import React from 'react';
import {
    Table
} from "semantic-ui-react";

export const SampleTable: React.FC = () => {
    const findings = [{
        x: 1,
        y: 2
    }, {
        x: 3,
        y: 4
    }];
    return (
        <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>X</Table.HeaderCell>
            <Table.HeaderCell singleLine>Y</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {findings?.map((item, idx) => (
            <Table.Row key={idx}>
              <Table.Cell singleLine>{item.x}</Table.Cell>
              <Table.Cell>{item.y}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
}