import { FindingProps, ItemProps } from "items-domain";
import { PartialBy } from "items-domain/dist/type-helper";
export type FindingCreationParams = PartialBy<FindingProps, 'id'>
export type ItemCreationParams = PartialBy<ItemProps, 'id' | 'findings'> & {
  findings?: FindingCreationParams[]
};