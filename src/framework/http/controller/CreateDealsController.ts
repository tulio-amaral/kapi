import { Request, Response } from 'express';

import CreateDealsAtBlingUseCase from '../../../useCases/CreateDealsAtBlingUseCase';
import CreateDealsUseCase from '../../../useCases/CreateDealsUseCase';
import ListDealsAtPipedriveUseCase from '../../../useCases/ListDealsAtPipedriveUseCase';

class CreateDealsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listDealsAtPipedriveUseCase = new ListDealsAtPipedriveUseCase();
    const createDealsUseCase = new CreateDealsUseCase();
    // const createDealAtBlingUseCase = new CreateDealsAtBlingUseCase();

    const listDeals = await listDealsAtPipedriveUseCase.execute();

    // Add deal to Bling (not working, although all parameters are being sent)

    // try {
    //   listDeals.map(deal => {
    //     return createDealAtBlingUseCase.execute({
    //       name: deal.name,
    //       sequence: deal.sequence,
    //       value: deal.value,
    //     });
    //   });
    // } catch {
    //   return response.send();
    // }

    listDeals.map(deal => {
      return createDealsUseCase.execute({
        date: deal.date,
        name: deal.name,
        sequence: deal.sequence,
        value: deal.value,
      });
    });

    return response.status(201).send();
  }
}

export default CreateDealsController;
