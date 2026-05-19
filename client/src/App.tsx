import { useEffect, useState } from "react";

const API = "http://localhost:5000";

export default function App() {
  const [health, setHealth] = useState<string>("loading");

  useEffect(() => {
    fetch(`${API}/health`)
      .then((r) => r.json())
      .then((d) => setHealth(d.status ?? "ok"))
      .catch(() => setHealth("unreachable"));
  }, []);

  return (
    <main>
      <h1>ShipFix Vite + Express basic fixture</h1>
      <p>API health: {health}</p>
    </main>
  );
}
