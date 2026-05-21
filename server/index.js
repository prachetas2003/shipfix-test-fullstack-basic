import express from "express";

import cors from "cors";
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || true }));
// Intentionally wrong port for deployment blocker (backend should use PORT).

app.get("/api/version", (_req, res) => {
  res.json({ version: "0.1.0" });
});

const PORT = process.env.PORT || 3000;

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Fixture API listening on ${PORT} (frontend expects 5000)`);
});
