import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

class Conta extends Model {

    public static table = "contas";

    // NOTE: THIS is WORKING???
    @field("usuario")
    public usuario!: string;

    @field("senha")
    public senha!: string;

}

export { Conta };
