// api/getcmd.js
import store from "./_store.js";

export default function handler(req, res) {
  // Trả về command hiện tại cho ESP32
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(store.command);
}
