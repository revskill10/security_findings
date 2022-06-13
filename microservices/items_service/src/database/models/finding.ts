import { LocationProps, MetadataProps } from 'items-domain';
import { Model } from 'objection';
import { Item } from './item';

export class Finding extends Model {
    static get tableName() {
      return 'findings';
    }

    id!: number;
    item_id!: number;
    finding_type!: string;
    rule_id!: string;
    location!: LocationProps;
    metadata!: MetadataProps;

  
    static get relationMappings() {
      return {
        item: {
          relation: Model.HasOneRelation,
          modelClass: Item,
          join: {
            to: 'items.id',
            from: 'findings.item_id'
          }
        }
      };
    }
}