import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCardapio1717020598547 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cardapios',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'dia',
                        type: 'varchar',
                    },
                    {
                        name: 'ingredientes',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'bebidas',
                        type: 'varchar',
                        isArray: true,
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
        await queryRunner.dropTable('cardapios');
    }

}
