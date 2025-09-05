// api/on2.js
import store from "./_store";
export default function handler(req, res) {
  store.command.lamp2 = 1;
  store.command.bright2 = 255;
  return res.status(200).send("OK");
}
