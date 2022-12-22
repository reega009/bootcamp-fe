const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    target: "https://bootcamp-production.up.railway.app",
    secure: true,
  }
]
module.exports = PROXY_CONFIG;
