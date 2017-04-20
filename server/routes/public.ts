import {Request, Response, Router} from 'express';

const publicRouter: Router = Router();

publicRouter.get('/ping', (request: Request, response: Response) => {
    response.json({
        text: 'Public API',
        title: 'Test'
    });
});

export {publicRouter};
