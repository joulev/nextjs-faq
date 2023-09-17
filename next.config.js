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
    // Redirect old slugs to new shortened slugs
    {
      source: "/fetching-own-api-endpoint-in-getserversideprops-and-similar-functions",
      destination: "/fetch-api-in-getserversideprops",
      permanent: true,
    },
    {
      source: "/fetching-own-api-endpoint-in-react-server-components",
      destination: "/fetch-api-in-rsc",
      permanent: true,
    },
    {
      source: "/get-pathname-in-server-components",
      destination: "/get-pathname-in-rsc",
      permanent: true,
    },
    {
      source: "/how-do-i-use-x-in-the-app-router",
      destination: "/use-x-in-app-router",
      permanent: true,
    },
    {
      source: "/how-to-create-a-minimal-reproduction-repository",
      destination: "/minimal-reproduction-repository",
      permanent: true,
    },
    {
      source: "/how-to-set-metadata-to-page-tsx-rendered-as-client-components",
      destination: "/metadata-client-components",
      permanent: true,
    },
    {
      source: "/module-not-found-error-on-deployment-but-build-works-fine-locally",
      destination: "/module-not-found-due-to-case-sensitivity",
      permanent: true,
    },
    {
      source: "/when-is-a-component-a-client-component-in-the-app-router",
      destination: "/when-client-component-in-app-router",
      permanent: true,
    },
    {
      source: "/why-is-document-or-window-not-defined-in-client-component",
      destination: "/browser-api-client-component",
      permanent: true,
    },
    {
      source:
        "/why-is-the-session-unavailable-when-i-fetch-the-session-route-in-next-auth-from-my-server-component",
      destination: "/session-unavailable-in-server-component",
      permanent: true,
    },
  ],
};

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(config);
