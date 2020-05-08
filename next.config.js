module.exports = {
  webpack: (config) => {
    const addModules = ['src'];

    config.resolve.modules = config.resolve.modules ? config.resolve.modules.concat(addModules) : addModules;

    return config;
  },
};
