module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
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
