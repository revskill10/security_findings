import '../../module-alias';
import '../db';
import { Item } from '../models/item';

async function main() {
    const items = await Item.query()
        .withGraphFetched('findings');
    console.log('items', items);
}

main();