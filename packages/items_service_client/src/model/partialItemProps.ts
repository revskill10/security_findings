/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * items-service
 * OpenAPI spec version: 1.0.0
 */
import type { ItemStatus } from './itemStatus';
import type { FindingProps } from './findingProps';

/**
 * Make all properties in T optional
 */
export interface PartialItemProps {
  id?: number;
  status?: ItemStatus;
  repositoryName?: string;
  findings?: FindingProps[];
  queuedAt?: string;
  scanningAt?: string;
  finishedAt?: string;
}