/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * items-service
 * OpenAPI spec version: 1.0.0
 */
import type { FindingProps } from './findingProps';
import type { ItemStatus } from './itemStatus';

export interface ItemProps {
  finishedAt?: string;
  scanningAt?: string;
  queuedAt: string;
  findings: FindingProps[];
  repositoryName: string;
  status: ItemStatus;
  id: string;
}
