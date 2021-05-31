import axios from 'axios';
import { ICreateDealsDTO } from 'dtos/ICreateDealsDTO';

import Deal from '../framework/mongoose/schema/Deal';

class CreateDealsAtBlingUseCase {
  async execute({
    sequence,
    name,
    value,
    date,
  }: ICreateDealsDTO): Promise<void> {
    const recordAlreadyExists = await Deal.findOne({ sequence });

    if (recordAlreadyExists) {
      return;
    }

    const data = {
      pedido: {
        cliente: {
          nome: name,
        },
        transporte: {
          volumes: {
            volume: {
              servico: 'SEDEX - CONTRATO',
            },
          },
        },
        itens: {
          descricao: 'Teste',
          qtde: 1.0,
          vlr_unit: value,
        },
        parcelas: {
          parcela: {
            vlr: 5.0,
          },
        },
      },
    };

    await axios.post(
      `https://bling.com.br/Api/v2/pedido/json/&apikey=${process.env.API_KEY_BLING}`,
      data,
    );
  }
}

export default CreateDealsAtBlingUseCase;
