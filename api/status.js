// api/status.js
import store from "./_store.js";

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = (req.body && typeof req.body === "object") ? req.body : {};
    store.status = { ...store.status, ...body, lastSeen: new Date().toISOString() };
    // Also sync mode if provided
    if (body.mode) store.status.mode = body.mode;
    return res.status(200).json({ message: "status updated", status: store.status });
  }
  // GET -> trả trạng thái cho UI
  res.setHeader("Content-Type", "application/json");
  return res.status(200).json(store.status);
}
