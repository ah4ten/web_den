// api/on1.js
import store from "./_store.js";
export default function handler(req, res) {
  // nhấn ON trên web => cập nhật command (bật lamp1, sáng max)
  store.command.lamp1 = 1;
  store.command.bright1 = 255;
  return res.status(200).send("OK");
}
