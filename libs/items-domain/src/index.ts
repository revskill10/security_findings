export enum ItemStatuses {
  Queued = 'Queued'
}
export type ItemStatus = 'Queued';
export enum Severities {
  HIGH = 'HIGH'
}
export type Severity = 'HIGH';
export type LocationProps = {
  path: string;
  positions: {
    begin: {
      line: number;
    }
  }
}

export type MetadataProps = {
  description: string;
  severity: Severity;
}
export interface FindingProps {
  id: number;
  itemId: number;
  type: string;
  ruleId: string;
  location: LocationProps;
  metadata: MetadataProps;
}
export interface ItemProps {
  id: number;
  status: ItemStatus;
  repositoryName: string;
  findings: Array<FindingProps>;
  queuedAt: string;
  scanningAt?: string;
  finishedAt?: string;
}
