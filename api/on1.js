// api/on1.js
import store from "./_store";
export default function handler(req, res) {
  store.command.lamp1 = 1;
  store.command.bright1 = 255; // bật mặc định max
  return res.status(200).send("OK");
}
