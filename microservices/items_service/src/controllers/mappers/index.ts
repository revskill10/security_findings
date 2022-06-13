import { FindingProps, ItemProps } from "items-domain";
import { Finding } from "src/database/models/finding";
import { Item } from "src/database/models/item";
export type FindingCreationParams = Pick<FindingProps, 'ruleId' | 'type' | 'metadata' | 'location'>;
export type ItemCreationParams = Pick<Omit<ItemProps, 'findings'>, 'repositoryName' | 'status' | 'queuedAt' | 'scanningAt' | 'finishedAt'> & {
  findings?: FindingCreationParams[]
};


export function findingDomainToModel(domain: FindingCreationParams): Finding {
  return Finding.fromJson({
      finding_type: domain.type,
      location: domain.location,
      metadata: domain.metadata,
      rule_id: domain.ruleId
  });
}
export function domainToModel(domain: ItemCreationParams): Item {
  return Item.fromJson({
      repository_name: domain.repositoryName,
      status: domain.status,
      queued_at: new Date(domain.queuedAt),
      scanning_at: domain.scanningAt ? new Date(domain.scanningAt): undefined,
      finished_at: domain.finishedAt ? new Date(domain.finishedAt): undefined,
      findings: domain?.findings?.map(findingDomainToModel)
  });
}