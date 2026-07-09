import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function App() {
  const [health, setHealth] = useState("checking");
  const [time, setTime] = useState("");

  useEffect(() => {
    async function checkHealth() {
      try {
        const response = await fetch(`${apiUrl}/api/health`);
        const data = await response.json();
        setHealth(data.status || "ok");
        setTime(data.time || "");
      } catch {
        setHealth("offline");
      }
    }

    checkHealth();
  }, []);

  return (
    <main className="page">
      <section className="card">
        <p className="kicker">Upgraded starter</p>
        <h1>Build fast. Deploy free.</h1>
        <p className="lead">
          This website starter includes a modern React client and an Express server,
          pre-configured for local development and free deployment platforms.
        </p>
        <div className="statusRow">
          <span className="label">Server status</span>
          <span className={`pill ${health === "ok" ? "ok" : "bad"}`}>{health}</span>
        </div>
        {time && <p className="meta">Last response: {new Date(time).toLocaleString()}</p>}
      </section>
    </main>
  );
}
