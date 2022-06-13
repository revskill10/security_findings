import { FieldArrayRenderProps, FormikValues } from 'formik';
import { FindingCreationParams } from 'items_service_client/dist/model';
import React from 'react';
import {
    Button,
    Table
} from "semantic-ui-react";
import { FindingFormModal } from './finding-form-modal';

interface FindingsTableProps {
    formik: FormikValues;
    arrayHelpers: FieldArrayRenderProps;
}
export const FindingsTable: React.FC<FindingsTableProps> = ({ formik, arrayHelpers }) => {
    const findings = formik.values.findings as FindingCreationParams[];
    return (
        <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Type</Table.HeaderCell>
            <Table.HeaderCell singleLine>RuleId</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Severity</Table.HeaderCell>
            <Table.HeaderCell>Path</Table.HeaderCell>
            <Table.HeaderCell>Line number</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {findings?.map((item, idx) => (
            <Table.Row key={idx}>
              <Table.Cell singleLine>{item.type}</Table.Cell>
              <Table.Cell>{item.ruleId}</Table.Cell>
              <Table.Cell singleLine>{item.metadata.description}</Table.Cell>
              <Table.Cell singleLine>{item.metadata.severity}</Table.Cell>
              <Table.Cell singleLine>{item.location.path}</Table.Cell>
              <Table.Cell singleLine>
                {item.location.positions.begin.line}
              </Table.Cell>
              <Table.Cell singleLine>
                <FindingFormModal
                    formik={formik}
                    idx={idx}
                    arrayHelpers={arrayHelpers}
                />
              </Table.Cell>
              <Table.Cell singleLine>
                <Button type='button' onClick={() => arrayHelpers.remove(idx)}>Remove</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
}