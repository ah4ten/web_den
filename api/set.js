// api/set.js
import store from "./_store";

export default function handler(req, res) {
  const lamp = req.query.lamp || (req.method === 'POST' && req.body.lamp);
  const value = req.query.value || (req.method === 'POST' && req.body.value);

  if (!lamp || value === undefined) {
    return res.status(400).send("Missing parameter");
  }
  const l = parseInt(lamp);
  const v = parseInt(value);
  if (l === 1) store.command.bright1 = Math.max(0, Math.min(255, v));
  else if (l === 2) store.command.bright2 = Math.max(0, Math.min(255, v));
  return res.status(200).send("OK");
}
