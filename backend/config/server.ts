

export default ({ env }) => {
  console.log("🚀 NODE_ENV DETECTED:", env("NODE_ENV", "not set"));

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
    environment: env("NODE_ENV", "development"), 
  };
};