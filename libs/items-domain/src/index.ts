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
export type FindingProps = {
  id: string;
  itemId: string;
  type: string;
  ruleId: string;
  location: LocationProps;
  metadata: MetadataProps;
}
export type ItemProps = {
  id: string;
  status: ItemStatus;
  repositoryName: string;
  findings: Array<FindingProps>;
  queuedAt: string;
  scanningAt?: string;
  finishedAt?: string;
}

export type FindingCreationParams = Omit<FindingProps, 'id'>;
export type ItemCreationParams = Omit<ItemProps, 'id' | 'findings'> & {
  findings?: FindingCreationParams[]
};