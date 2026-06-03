import { useEffect, useState } from "react"
export default function App() {
  const [apiHtml, setApiHtml] = useState<string>("(loading...)")
  useEffect(() => {
    fetch("/api/")
      .then((r) => r.text())
      .then(setApiHtml)
      .catch((e) => setApiHtml("API error: " + String(e)))
  }, [])
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 720, margin: "40px auto", padding: 20 }}>
      <h1 style={{ color: "#1a73e8" }}>Forge fullstack droplet</h1>
      <p>If you see this page, the <strong>frontend</strong> Vite build is being served by Caddy from <code>/opt/app/src/frontend/dist</code>.</p>
      <h2>What the backend says (via /api/):</h2>
      <pre style={{ background: "#f4f4f4", padding: 12, borderRadius: 6, overflow: "auto" }}>{apiHtml}</pre>
      <p><small>Both halves served from the same <code>&lt;ip&gt;.nip.io</code> origin -- no CORS, no VITE_API_URL.</small></p>
    </div>
  )
}
