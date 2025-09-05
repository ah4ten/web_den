// api/setmode.js
import store from "./_store";

export default function handler(req, res) {
  const m = req.query.m || (req.method === 'POST' && req.body.m);
  if (!m) return res.status(400).send("Missing m");
  // when change mode, turn off all lamps (match your ESP behavior)
  store.command.lamp1 = 0;
  store.command.lamp2 = 0;
  if (m === 'manu') store.command.mode = 'manu';
  else if (m === 'auto') store.command.mode = 'auto';
  return res.status(200).send("OK");
}
