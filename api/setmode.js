// api/setmode.js
import store from "./_store.js";

export default function handler(req, res) {
  const m = req.query?.m ?? (req.method === "POST" ? req.body?.m : undefined);
  if (!m) return res.status(400).send("Missing parameter m");

  store.command.mode = (m === "auto") ? "auto" : "manu";

  // Khi đổi chế độ -> tắt tất cả đèn theo yêu cầu
  store.command.lamp1 = 0;
  store.command.lamp2 = 0;

  // reset brightness to default when switching
  store.command.bright1 = 255;
  store.command.bright2 = 255;

  return res.status(200).json({ message: "mode updated", command: store.command });
}
