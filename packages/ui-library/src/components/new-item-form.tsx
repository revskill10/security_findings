import React from "react";
import { Button, Form } from "semantic-ui-react";
import { FindingCreationParams, ItemCreationParams } from "items_service_client/dist/model";
import { useFormik, FieldArray, FormikProvider } from 'formik';
import { FindingsTable  } from "./findings-table";

const emptyFinding: FindingCreationParams = {
  ruleId: '',
  type: '',
  location: {
      path: '',
      positions: {
          begin: {
              line: 0       
          }
      }
  },
  metadata: {
      description: '',
      severity: 'HIGH'
  }
}

const emptyItem: ItemCreationParams = {
  repositoryName: '',
  queuedAt: '',
  status: 'Queued',
}

interface NewItemFormProps {
  isLoading: boolean;
  onSubmit: (data: ItemCreationParams) => Promise<void>
}
export const NewItemForm: React.FC<NewItemFormProps> = (props) => {
  const { isLoading, onSubmit } = props;
  const formik = useFormik({
    initialValues: emptyItem,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      await onSubmit(values);
    },
  });
  
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>      
        <Form.Field>
          <label htmlFor="status">Status</label>
          <select id="status" name="status" onChange={formik.handleChange} value={formik.values.status}>
            <option>Queued</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label htmlFor="repositoryName">RepositoryName</label>
          <input id="repositoryName" name="repositoryName" onChange={formik.handleChange} value={formik.values.repositoryName} placeholder="RepositoryName" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="queuedAt">QueuedAt</label>
          <input id="queuedAt" name="queuedAt" onChange={formik.handleChange} value={formik.values.queuedAt} placeholder="QueuedAt" type="date" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="scanningAt">ScanningAt</label>
          <input id="scanningAt" name="scanningAt" onChange={formik.handleChange} value={formik.values.scanningAt} placeholder="ScanningAt" type="date" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="finishedAt">FinishedAt</label>
          <input id="finishedAt" name="finishedAt" onChange={formik.handleChange} value={formik.values.finishedAt} placeholder="FinishedAt" type="date" />
        </Form.Field>
        <FieldArray
            name="findings"
            render={(arrayHelpers) => (
              <div>
                <FindingsTable
                  formik={formik}
                  arrayHelpers={arrayHelpers}
                />
                <Button
                  type="button"
                  onClick={() => arrayHelpers.push(emptyFinding)}
                >+</Button>
              </div>
            )}
          />
        <br />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </FormikProvider>
  );
};
