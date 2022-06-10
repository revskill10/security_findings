import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Finding } from "./types";
const emptyFinding: Finding = {
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
export const NewItemForm = () => {
  let [findings, setFindings] = useState<Array<Finding>>([]);
  let [count, setCount] = useState<number>(findings.length);
  const addCount = () => {
    let arr = findings;
    arr[count] = emptyFinding;
    setFindings(arr);
    setCount(arr.length + 1);
  };
  const removeCount = (index: Finding) => {
    setFindings(findings.filter((item) => item !== index));
  };
  return (
    <Form>
      <Form.Field>
        <label>Id</label>
        <input placeholder="Id" />
      </Form.Field>
      <Form.Field>
        <label>Status</label>
        <select>
          <option>Queued</option>
          <option>In Progress</option>
          <option>Success</option>
          <option>Failure</option>
        </select>
      </Form.Field>
      <Form.Field>
        <label>RepositoryName</label>
        <input placeholder="RepositoryName" />
      </Form.Field>
      <Form.Field>
        <label>QueuedAt</label>
        <input placeholder="QueuedAt" type="date" />
      </Form.Field>
      <Form.Field>
        <label>ScanningAt</label>
        <input placeholder="ScanningAt" type="date" />
      </Form.Field>
      <Form.Field>
        <label>FinishedAt</label>
        <input placeholder="FinishedAt" type="date" />
      </Form.Field>
      <Button type="submit" onClick={() => addCount()}>
        Add Finding
      </Button>
      {findings.map((item) => {
        return (
          <Form.Field>
            <label>Finding</label>
            <input placeholder="Type" />
            <input placeholder="RuleId" />
            <input placeholder="Path" />
            <input placeholder="Line" />
            <input placeholder="Description" />
            <input placeholder="Severity" />
            <Button type="submit" onClick={() => removeCount(item)}>
              Remove Finding
            </Button>
          </Form.Field>
        );
      })}
      <br />
      <br />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export * from "./types";