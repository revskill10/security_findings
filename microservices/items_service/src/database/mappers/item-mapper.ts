import { ItemProps, ItemStatus } from "items-domain";
import { Item } from "../models/item";
import { modelToDomain as findingMapper } from './finding-mapper';
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