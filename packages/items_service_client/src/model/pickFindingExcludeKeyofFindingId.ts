/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * items-service
 * OpenAPI spec version: 1.0.0
 */
import type { LocationProps } from './locationProps';
import type { MetadataProps } from './metadataProps';

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface PickFindingExcludeKeyofFindingId {
  itemId: string;
  type: string;
  ruleId: string;
  location: LocationProps;
  metadata: MetadataProps;
}
