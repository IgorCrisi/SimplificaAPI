import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('pedidos')
class Pedido {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: "int", generated: "increment" })
  numero: number;

  @Column()
  tamanho: string;

  @Column("varchar", { array: true })
  ingredientes: string[];

  @Column("varchar", { array: true })
  bebidas: string[];

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  endereco: string;

  @Column()
  credito: boolean;

  @Column()
  debito: boolean;

  @Column()
  dinheiro: boolean;

  @Column()
  pix: boolean;

  @Column()
  troco: string;

  @Column()
  finalizado: boolean;

  @Column()
  total: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Pedido;
