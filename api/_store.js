// api/_store.js
// Shared in-memory store — giữ nguyên logic cũ
const store = {
  command: {
    mode: "manu",
    lamp1: 0,
    lamp2: 0,
    bright1: 255,
    bright2: 255
  },
  status: {
    lamp1: 0,
    lamp2: 0,
    bright1: 0,
    bright2: 0,
    pir1: 0,
    pir2: 0,
    lastSeen: null,
    mode: "manu"
  }
};

export default store;
