import type { Finding as FindingProps } from "items-domain";
import { Finding } from "../models/finding";

export function modelToDomain(model: Finding): FindingProps {
    return {
        type: model.finding_type,
        location: model.location,
        metadata: model.metadata,
        ruleId: model.rule_id
    }
}