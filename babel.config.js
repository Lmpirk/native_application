module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root:["."],
          alias: {
            "@assets": "./app/assets",
            "@components": "./app/components",
            "@constansts": "./app/constants",
            "@helpers": "./app/helpers",
            "@hooks": "./app/hooks",
            "@i18n": "./app/i18n",
            "@screens": "./app/screens",
            "@navigation": "./app/navigation",
            "@config": "./app/config",
            "@models": "./app/models",
          }
        }
      ]
    ]
  };
};
