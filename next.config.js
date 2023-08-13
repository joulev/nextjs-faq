/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  reactStrictMode: true,
  eslint: {
    // Replaced by root workspace command
    ignoreDuringBuilds: true,
  },
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
    {
      source: "/cannot-read-properties-of-null-error-hooks-contexts",
      destination:
        "https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive",
      permanent: true,
    },
  ],
};

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(config);
