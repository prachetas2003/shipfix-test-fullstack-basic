import express from "express";

const app = express();
// Intentionally wrong port for deployment blocker (backend should use PORT).
const port = 3000;

app.get("/api/version", (_req, res) => {
  res.json({ version: "0.1.0" });
});

app.listen(port, () => {
  console.log(`Fixture API listening on ${port} (frontend expects 5000)`);
});
