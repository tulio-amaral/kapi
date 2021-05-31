import { Router } from 'express';

import CreateDealsController from '../controller/CreateDealsController';

const dealsRoutes = Router();

const createDealsController = new CreateDealsController();

dealsRoutes.post('/', createDealsController.handle);

export default dealsRoutes;
