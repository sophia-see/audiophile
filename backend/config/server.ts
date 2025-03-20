

export default ({ env }) => {
  console.log("🚀 NODE_ENV DETECTED:", env("NODE_ENV", "not set"));
  console.log("🚀 STRAPI ENVIRONMENT:", strapi.config.environment);

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
};