'use strict';

import { Request, Response } from 'express';

interface IApi {
  (req: Request, res: Response): { statusCode: number; data: object };
}

exports.handle = (api: IApi) => async (req: Request, res: Response) => {
  try {
    const { statusCode, data } = await api(req, res);
    return res.status(statusCode).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error, timeStamp: new Date().toISOString() });
  }
};
