import axios from 'axios';

import { ICreateDealsDTO } from '../dtos/ICreateDealsDTO';

type IRequest = {
  id: number;
  person_name: string;
  value: number;
  won_time: Date;
};

class ListDealsAtPipedriveUseCase {
  async execute(): Promise<ICreateDealsDTO[]> {
    const { data } = await axios.get(
      `https://access2.pipedrive.com/api/v1/deals/?status=won&&api_token=${process.env.API_KEY_PIPEDRIVE}`,
    );

    const deals = data.data.map((deal: IRequest) => {
      return {
        sequence: deal.id,
        name: deal.person_name,
        value: deal.value,
        date: deal.won_time,
      };
    });

    return deals;
  }
}

export default ListDealsAtPipedriveUseCase;
