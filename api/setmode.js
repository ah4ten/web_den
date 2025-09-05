// api/setmode.js
import store from "./_store";

export default function handler(req, res) {
  const m = req.query.m || (req.method === "POST" && req.body.m);
  if (!m) return res.status(400).send("Missing parameter m");

  // Khi đổi mode -> tắt tất cả đèn (y như yêu cầu)
  store.command.lamp1 = 0;
  store.command.lamp2 = 0;

  if (m === "manu") store.command.mode = "manu";
  else if (m === "auto") store.command.mode = "auto";
  else return res.status(400).send("Invalid mode");

  return res.status(200).send("OK");
}
