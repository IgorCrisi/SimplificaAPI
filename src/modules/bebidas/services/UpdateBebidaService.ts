import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IBebidaRepository } from "../domain/repositories/IBebidaRepository";
import { IUpdateBebida } from "../domain/models/IUpateBebida";
import { IBebida } from "../domain/models/IBebida";

@injectable()
class UpdateBebidaService {
  constructor(
    @inject('BebidaRepository')
    private bebidaRepository: IBebidaRepository,
  ){}

public async execute({
  bebida_id, 
  nome,
  valor
}: IUpdateBebida): Promise<IBebida> {
    const bebida = await this.bebidaRepository.findById(bebida_id);
    if(!bebida){
      throw new AppError('Bebida não encontrada');
    }

    const bebidaExists = await this.bebidaRepository.findByNome(nome);
    if (bebidaExists != null && bebidaExists.length > 0) {
      if(bebidaExists[0].id != bebida_id){
        throw new AppError('O nome desta bebida não está disponível');
      }
    }
 
    bebida.nome = nome;
    bebida.valor = valor;

    await this.bebidaRepository.save(bebida);
    return bebida;
  }
}

export default UpdateBebidaService;
