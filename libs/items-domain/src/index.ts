export enum ItemStatuses {
  Queued = 'Queued'
}
export type ItemStatus = 'Queued';
export enum Severities {
  HIGH = 'HIGH'
}
export type Severity = 'HIGH';
export type Finding = {
  type: string;
  ruleId: string;
  location: {
      path: string;
      positions: {
          begin: {
              line: number;
          }
      }
  };
  metadata: {
      description: string;
      severity: Severity;
  };
}
export type ItemProps = {
  id: string;
  status: ItemStatus;
  repositoryName: string;
  findings: Array<Finding>;
  queuedAt: string;
  scanningAt?: string;
  finishedAt?: string;
}

export type ItemCreationParams = {
  status: ItemStatus;
  repositoryName: string;
  findings: Array<Finding>;
  queuedAt: string;
}