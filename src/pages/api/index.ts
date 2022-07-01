import { NextApiRequest, NextApiResponse } from 'next';
import requestIp from 'request-ip';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ip: string | null }>
) {
  const clientIp = requestIp.getClientIp(req);
  if (req.method === 'GET' && req.url === '/api') {
    res.status(200).json({ ip: clientIp });
  }
}
