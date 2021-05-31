import { Request, Response } from 'express';

import CreateDealsUseCase from '../../../useCases/CreateDealsUseCase';
import ListDealsAtPipedriveUseCase from '../../../useCases/ListDealsAtPipedriveUseCase';

class CreateDealsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listDealsAtPipedriveUseCase = new ListDealsAtPipedriveUseCase();
    const createDealsUseCase = new CreateDealsUseCase();

    const listDeals = listDealsAtPipedriveUseCase.execute();

    const deals = (await listDeals).map(deal => {
      return createDealsUseCase.execute({
        date: deal.date,
        name: deal.name,
        sequence: deal.sequence,
        value: deal.value,
      });
    });

    return response.status(201).json(deals);
  }
}

export default CreateDealsController;
