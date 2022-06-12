import { Model } from 'objection';
import { Finding } from './finding';

export class Item extends Model {
    static get tableName() {
      return 'items';
    }

    id!: number;
    repository_name!: string;
    status!: string;
    queued_at!: Date;
    scanning_at?: Date;
    finished_at?: Date;
    findings?: Finding[];

    static get relationMappings() {
      return {
        findings: {
          relation: Model.HasManyRelation,
          modelClass: Finding,
          join: {
            from: 'items.id',
            to: 'findings.item_id'
          }
        }
      };
    }
}