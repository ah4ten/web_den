// /api/status.js
let espStatus = {
  lamp1: 0,
  lamp2: 0,
  bright1: 0,
  bright2: 0,
  pir1: 0,
  pir2: 0
};

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const body = req.body;
      espStatus = { ...espStatus, ...body };
      return res.status(200).json({ message: "Status updated", espStatus });
    } catch (err) {
      return res.status(400).json({ error: "Invalid JSON" });
    }
  }

  if (req.method === "GET") {
    return res.status(200).json(espStatus);
  }

  res.status(405).json({ error: "Method not allowed" });
}
