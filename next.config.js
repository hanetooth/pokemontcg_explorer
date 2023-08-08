/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pokemontcg.io'],
  },
  webpack(config) {
    // svg loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    // scss class name to camelCase
    const rules = config.module.rules.find(
      (rule) => typeof rule.oneOf === 'object').oneOf.filter((rule) => Array.isArray(rule.use)
    );
    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader !== undefined 
          && moduleLoader.loader.includes('css-loader') 
          && typeof moduleLoader.options.modules === 'object'
        ) {
          moduleLoader.options = {
            ...moduleLoader.options,
            modules: {
              ...moduleLoader.options.modules,
              // This is where we allow camelCase class names
              exportLocalsConvention: 'camelCase'
            }
          };
        }
      });
    });
    return config;
  }
}

module.exports = nextConfig
