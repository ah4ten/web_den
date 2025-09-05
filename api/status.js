// api/status.js
import store from "./_store";

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    store.status = { ...store.status, ...body, lastSeen: new Date().toISOString() };
    return res.status(200).json({ message: "status updated", status: store.status });
  }
  // GET -> trả status để UI có thể lấy
  return res.status(200).json(store.status);
}
