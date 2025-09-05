// api/off2.js
import store from "./_store.js";
export default function handler(req, res) {
  store.command.lamp2 = 0;
  return res.status(200).send("OK");
}
