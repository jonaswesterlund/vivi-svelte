/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-webpack',
  ],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
