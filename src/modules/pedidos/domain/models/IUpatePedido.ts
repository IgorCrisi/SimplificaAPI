export interface IUpdatePedido{
    pedido_id: string;
    tamanho: string;
    ingredientes: string[];
    bebidas: string[];
    nome: string;
    telefone: string;
    endereco: string;
    credito: boolean;
    debito: boolean;
    dinheiro: boolean;
    pix: boolean;
    finalizado: boolean;
    troco: string;
    total: number;
}