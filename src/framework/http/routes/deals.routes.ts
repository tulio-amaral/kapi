import { Router } from 'express';

import CreateDealsController from '../controller/CreateDealsController';
import GroupDealByDayController from '../controller/GroupDealByDayController';
import ListDealsController from '../controller/ListDealsController';

const dealsRoutes = Router();

const createDealsController = new CreateDealsController();
const groupDealByDayController = new GroupDealByDayController();
const listDealsController = new ListDealsController();

dealsRoutes.post('/', createDealsController.handle);
dealsRoutes.get('/', groupDealByDayController.handle);

dealsRoutes.get('/list', listDealsController.handle);

export default dealsRoutes;
