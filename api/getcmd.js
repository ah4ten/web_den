// api/getcmd.js
import store from "./_store";
export default function handler(req, res) {
  // return the command object to ESP32
  return res.status(200).json(store.command);
}
