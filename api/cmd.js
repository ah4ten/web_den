// /api/cmd.js
let command = {
  mode: "manu",   // manu | auto
  lamp1: 0,       // 0=OFF, 1=ON
  lamp2: 0,
  bright1: 255,
  bright2: 255
};

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const body = req.body;
      command = { ...command, ...body };
      return res.status(200).json({ message: "Command updated", command });
    } catch (err) {
      return res.status(400).json({ error: "Invalid JSON" });
    }
  }

  if (req.method === "GET") {
    return res.status(200).json(command);
  }

  res.status(405).json({ error: "Method not allowed" });
}
