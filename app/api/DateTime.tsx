import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const currentDateTime = new Date().toLocaleString();
  res.status(200).json({ currentDateTime });
};