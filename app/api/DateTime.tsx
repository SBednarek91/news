import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const currentDateTime = new Date().toLocaleString();
  res.status(200).json({ currentDateTime });
};

export default handler;