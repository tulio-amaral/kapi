import { Request, Response } from 'express';

import Group from '../../mongoose/schema/Group';

class ListDealsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllDeals = await Group.find();

    return response.json(listAllDeals);
  }
}

export default ListDealsController;
