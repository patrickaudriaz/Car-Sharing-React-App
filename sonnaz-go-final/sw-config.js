module.exports = {
  runtimeCaching: [
    {
      urlPattern: /.*/,
      handler: "cacheFirst"
    },
    {
      urlPattern: "/",
      handler: "cacheFirst"
    }
  ]
};
