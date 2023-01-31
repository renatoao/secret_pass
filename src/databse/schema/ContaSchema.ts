import { tableSchema } from "@nozbe/watermelondb";

const contaSchema = tableSchema({
    name: "contas",
    columns: [
        {
            name: "usuario", type: "string",
        },
        {
            name: "senha", type: "string",
        },
    ],
});

export { contaSchema };
