// backend/server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Login endpoint (Week 3 - Day 1)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // simple hardcoded check (replace with DB later)
  if (email === "test@example.com" && password === "1234") {
    return res.json({
      success: true,
      token: "dummy-jwt-token", // later we’ll use real JWT
      user: { email },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
});

// ✅ Fake breach scan API (already added earlier)
app.post("/scan-breach", (req, res) => {
  const { email } = req.body;
  res.json({
    email,
    risk: "Low",
    checks: ["No breach found"],
    timestamp: new Date().toISOString(),
  });
});

// ✅ Fake website scan API (already added earlier)
app.post("/scan-website", (req, res) => {
  const { url } = req.body;
  res.json({
    url,
    risk: "Medium",
    checks: ["Outdated SSL certificate"],
    timestamp: new Date().toISOString(),
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});

