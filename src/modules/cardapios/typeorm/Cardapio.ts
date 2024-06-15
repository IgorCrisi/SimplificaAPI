import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cardapios')
class Cardapio {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dia: string;

  @Column("varchar", { array: true })
  ingredientes: string[];

  @Column("varchar", { array: true })
  bebidas: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Cardapio;
