export default function handler(req, res) {
  const message =
    "Hey its Valentino over at Spectrum! Just wanted to reach out and thank you for allowing me to help you today. For future references, if you need anything Spectrum related or have any questions about your services, reply to this message and I'll get back to you with an answer. Have a great day!";

  const smsUrl = `sms:?body=${encodeURIComponent(message)}`;

  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.statusCode = 200;

  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Opening SMS</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
    }
    .card {
      background: #fff;
      border-radius: 16px;
      padding: 32px 24px;
      max-width: 360px;
      width: 100%;
      text-align: center;
      box-shadow: 0 4px 24px rgba(0,0,0,0.10);
    }
    h1 { font-size: 1.25rem; color: #111; margin-bottom: 8px; }
    p  { font-size: 0.95rem; color: #555; line-height: 1.5; margin-bottom: 24px; }
    a.btn {
      display: inline-block;
      background: #0070f3;
      color: #fff;
      text-decoration: none;
      padding: 14px 28px;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
    }
    a.btn:active { opacity: 0.85; }
  </style>
  <script>
    window.location.href = ${JSON.stringify(smsUrl)};
  </script>
</head>
<body>
  <div class="card">
    <h1>Open SMS Composer</h1>
    <p>Your SMS app should open automatically.<br>If it did not, tap the button below.</p>
    <a class="btn" href="${smsUrl}">Tap to Open SMS</a>
  </div>
</body>
</html>`);
}
