import { appSchema } from "@nozbe/watermelondb";

import { contaSchema } from "./ContaSchema";

const schemas = appSchema({
    version: 1,
    tables: [
        contaSchema,
    ],
});

export { schemas };
