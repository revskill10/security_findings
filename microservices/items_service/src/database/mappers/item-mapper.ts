import { ItemProps, ItemStatus } from "items-domain";
import { Item } from "../models/item";
import { modelToDomain as findingMapper, domainToModel as findingDomainToModel } from './finding-mapper';
export function modelToDomain(model: Item): ItemProps {
    return {
        id: String(model.id),
        repositoryName: model.repository_name,
        status: model.status as ItemStatus,
        findings: model.findings?.map(findingMapper) || [],
        queuedAt: model.queued_at.toDateString(),
        scanningAt: model?.scanning_at?.toDateString(),
        finishedAt: model?.finished_at?.toDateString()
    }
}

export function domainToModel(domain: ItemProps): Item {
    return Item.fromJson({
        id: Number(domain.id),
        repository_name: domain.repositoryName,
        status: domain.status,
        queued_at: new Date(domain.queuedAt),
        scanning_at: domain.scanningAt ? new Date(domain.scanningAt): undefined,
        finished_at: domain.finishedAt ? new Date(domain.finishedAt): undefined,
        findings: domain.findings.map(findingDomainToModel)
    });
}