import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ITamanhoMarmitaRepository } from "../domain/repositories/ITamanhoRepository";
import { IUpdateTamanhoMarmita } from "../domain/models/IUpdateTamanhoMarmita";
import { ITamanhoMarmita } from "../domain/models/ITamanhoMarmita";

@injectable()
class UpdateTamanhoService {
  constructor(
    @inject('TamanhoMarmitaRepository')
    private tamanhoMarmitaRepository: ITamanhoMarmitaRepository,
  ){}

public async execute({
  tamanho_id, 
  nome,
  valor
}: IUpdateTamanhoMarmita): Promise<ITamanhoMarmita> {
    const tamanho = await this.tamanhoMarmitaRepository.findById(tamanho_id);
    if(!tamanho){
      throw new AppError('Tamanho de marmita não encontrado');
    }

    const tamanhoExists = await this.tamanhoMarmitaRepository.findByNome(nome);
    if (tamanhoExists != null && tamanhoExists.length > 0) {
      if(tamanhoExists[0].id != tamanho_id){
        throw new AppError('Este tamanho de marmita não está disponível');
      }
    }

    tamanho.nome = nome;
    tamanho.valor = valor;

    await this.tamanhoMarmitaRepository.save(tamanho);
    return tamanho;
  }
}

export default UpdateTamanhoService;
