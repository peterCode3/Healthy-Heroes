// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: 'npm',
      args: 'run dev',
      interpreter: 'none',
      instances: 1,
      env: {
        PORT: 3007,
      },
    },
  ],
};
