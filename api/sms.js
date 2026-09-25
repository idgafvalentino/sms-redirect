export default function handler(req, res) {
  const message =
    "Hey its Valentino over at Spectrum! Just wanted to reach out and thank you for allowing me to help you today. For future references, if you need anything Spectrum related or have any questions about your services, reply to this message and I'll get back to you with an answer. Have a great day!";

  const smsUrl = `smsto:?body=${encodeURIComponent(message)}`;

  res.setHeader("Cache-Control", "no-store");
  res.writeHead(302, {
    Location: smsUrl,
  });
  res.end();
}
