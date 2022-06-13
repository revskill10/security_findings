import type { Finding as FindingProps } from "items-domain";
import { Finding } from "../models/finding";

export function modelToDomain(model: Finding): FindingProps {
    return {
        id: String(model.id),
        itemId: String(model.item_id),
        type: model.finding_type,
        location: model.location,
        metadata: model.metadata,
        ruleId: model.rule_id
    }
}

export function domainToModel(domain: FindingProps): Finding {
    return Finding.fromJson({
        id: Number(domain.id),
        finding_type: domain.type,
        location: domain.location,
        metadata: domain.metadata,
        rule_id: domain.ruleId
    });
}