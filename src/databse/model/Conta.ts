import { Model } from "@nozbe/watermelondb";
import { field } from '@nozbe/watermelondb/decorators';

class Conta extends Model{
    static table = 'contas';

    @field('usuario')
    usuario!: string;

    @field('senha')
    senha!: string;
}

export {Conta}