import { Router } from 'express';

import dealsRoutes from './deals.routes';

const router = Router();

router.use('/deals', dealsRoutes);

export default router;
