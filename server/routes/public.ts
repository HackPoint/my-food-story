import {Request, Response, Router} from 'express';

const publicRouter: Router = Router();

publicRouter.get('/ping', (request: Request, response: Response) => {
  response.json({
    text: 'Public API',
    title: 'Test'
  });
});

publicRouter.get('/images', (req: Request, res: Response) => {
  res.json({
    "screenshots": [
      {
        "img": "assets/images/space1.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "liked": "0"
      },
      {
        "img": "assets/images/space2.jpg",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "liked": "0"
      },
      {
        "img": "assets/images/space3.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "liked": "0"
      }
    ]
  });
});

export {publicRouter};
