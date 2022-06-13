import { FieldArrayRenderProps, FormikConfig, FormikValues } from "formik";
import { FindingCreationParams, ItemCreationParams } from "items_service_client/dist/model";
import React, { useState } from "react";
import {
  Button,
  Divider,
  Form,
  Header,
  Image,
  Modal,
  Table
} from "semantic-ui-react";

interface FindingFormModalProps {
    formik: FormikValues;
    idx: number;
    arrayHelpers: FieldArrayRenderProps;
}
export const FindingFormModal: React.FC<FindingFormModalProps> = ({
    formik,
    idx,
    arrayHelpers
}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button type="button">Edit</Button>}
      >
        <Modal.Header>Finding</Modal.Header>
        <Modal.Content>
            <Form>
        <Form.Field>
          <label htmlFor={`findings[${idx}].type`}>Type</label>
          <input 
            name={`findings[${idx}].type`}
            value={formik.values.findings && formik.values.findings[idx].type}
            onChange={formik.handleChange}
            placeholder="Type" 
          />
        </Form.Field>
          <Form.Field>
          <label htmlFor={`findings[${idx}].ruleId`}>RuleId</label>
          <input
            name={`findings[${idx}].ruleId`}
            value={formik.values.findings && formik.values.findings[idx].ruleId}
            onChange={formik.handleChange} 
            placeholder="RuleId" 
          />
          </Form.Field>
          <Form.Field>
            <label htmlFor={`findings[${idx}].location.path`}>Path</label>
          <input
            name={`findings[${idx}].location.path`}
            value={formik.values.findings && formik.values.findings[idx].location?.path}
            onChange={formik.handleChange}  
            placeholder="Path" 
          />
          </Form.Field>
          <Form.Field>
            <label htmlFor={`findings[${idx}].location.positions.begin.line`}>Begin line</label>
          <input
            name={`findings[${idx}].location.positions.begin.line`}
            value={formik.values.findings && formik.values.findings[idx].location?.positions?.begin?.line}
            onChange={formik.handleChange}   
            placeholder="Line" 
          />
          </Form.Field>
          <Form.Field>
            <label htmlFor={`findings[${idx}].metadata.description`}>Description</label>
          <input
            name={`findings[${idx}].metadata.description`}
            value={formik.values.findings && formik.values.findings[idx].metadata.description}
            onChange={formik.handleChange} 
            placeholder="Description" 
          />
          </Form.Field>
          <Form.Field>
            <label htmlFor={`findings[${idx}].metadata.severity`}>Severity</label>
            <select name={`findings[${idx}].metadata.severity`} onChange={formik.handleChange} value={formik.values.findings && formik.values.findings[idx].metadata.severity}>
              <option>HIGH</option>
            </select>
          </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button type="button" color="black" onClick={() => {
            setOpen(false);
          }}>
            Cancel
          </Button>
          <Button
            type="button"
            content="Save"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
      );
}