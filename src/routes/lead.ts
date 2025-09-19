import { Router } from 'express';

import { getAllLeadController, postLeadController } from 'src/controller/lead';
import { postLeadSchema } from 'src/validators/lead';

const leadRouter = Router();

leadRouter.get('/', getAllLeadController);
leadRouter.post('/', postLeadSchema, postLeadController);

export default leadRouter;
