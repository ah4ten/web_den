// api/getcmd.js
import store from "./_store";

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  return res.status(200).json(store.command);
}
