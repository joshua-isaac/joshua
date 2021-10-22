const { getRedirectStatus } = require("next/dist/lib/load-custom-routes");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["66.media.tumblr.com", "s3.us-west-2.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/#work",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "mailto:hello.joshua@hotmail.com",
        permanent: true,
      },
    ];
  },
};
