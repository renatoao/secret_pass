import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { Conta } from "./model/Conta";
import { schemas } from "./schema";

const adapter = new SQLiteAdapter({
    schema: schemas,
});

export const database = new Database({
    adapter,
    modelClasses: [ Conta ],

});
