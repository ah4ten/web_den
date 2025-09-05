// api/status.js
let espStatus = {
  lamp1: 0,
  lamp2: 0,
  bright1: 0,
  bright2: 0,
  pir1: 0,
  pir2: 0,
  lastSeen: null
};

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(espStatus);
  }
  if (req.method === "POST") {
    const body = (req.body && typeof req.body === 'object') ? req.body : {};
    espStatus = { ...espStatus, ...body, lastSeen: new Date().toISOString() };
    return res.status(200).json({ message: 'status updated', espStatus });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
