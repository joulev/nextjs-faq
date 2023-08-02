/** @type {import("next").NextConfig} */
module.exports = {
  redirects: async () => [
    {
      source: "/add-headers-and-status-to-response-in-route-handlers",
      destination:
        "https://nextjs.org/docs/app/building-your-application/routing/router-handlers#cors",
      permanent: true,
    },
    {
      source: "/request-body-in-route-handlers",
      destination:
        "https://nextjs.org/docs/app/building-your-application/routing/router-handlers#request-body",
      permanent: true,
    },
  ],
  experimental: {
    serverComponentsExternalPackages: ["vscode-oniguruma", "shiki"],
  },
};
