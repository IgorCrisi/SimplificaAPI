import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePedidos1716750173038 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pedidos',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'numero',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'tamanho',
                        type: 'varchar',
                    },
                    {
                        name: 'ingredientes',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'bebidas',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                    },
                    {
                        name: 'telefone',
                        type: 'varchar',
                    },
                    {
                        name: 'endereco',
                        type: 'varchar',
                    },
                    {
                        name: 'credito',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'debito',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'dinheiro',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'pix',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'troco',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'finalizado',
                        type: 'boolean',
                    },
                    {
                        name: 'total',
                        type: 'double precision',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pedidos');
    }

}
