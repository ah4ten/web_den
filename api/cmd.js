// api/cmd.js
// central command store (in-memory)
let command = {
  mode: "manu",   // "manu" or "auto"
  lamp1: 0,       // 0/1
  lamp2: 0,
  bright1: 255,
  bright2: 255
};

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(command);
  }
  if (req.method === "POST") {
    const body = (req.body && typeof req.body === 'object') ? req.body : {};
    command = { ...command, ...body };
    return res.status(200).json({ message: 'updated', command });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
