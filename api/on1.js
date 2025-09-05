// api/on1.js
import store from "./_store";

export default function handler(req, res) {
  // emulate original ESP route behavior: update command: lamp1 = 1, bright1 stays (but set to 255 on ON in ESP)
  store.command.lamp1 = 1;
  store.command.bright1 = 255;
  return res.status(200).send("OK");
}
