import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schemas } from './schema';
import { Conta } from './model/Conta';

const adapter = new SQLiteAdapter({
    schema:schemas
});

export const database = new Database({
    adapter,
    modelClasses: [Conta],
    
});
