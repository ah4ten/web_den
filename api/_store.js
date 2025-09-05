// api/_store.js
// shared in-memory store (simple)
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
    lastSeen: null
  }
};

export default store;
