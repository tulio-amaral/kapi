import { Request, Response } from 'express';

import GroupDealByDayUseCase from '../../../useCases/GroupDealByDayUseCase';

class GroupDealByDayController {
  async handle(request: Request, response: Response): Promise<Response> {
    const groupDealByDayUseCase = new GroupDealByDayUseCase();

    const dealsGrouped = groupDealByDayUseCase.execute();

    return response.status(200).json(dealsGrouped);
  }
}

export default GroupDealByDayController;
