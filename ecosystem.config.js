module.exports = {
  apps: [
    {
      name: "react-gold", // ubah sesuai nama aplikasi yang dibuat
      script: "serve",
      // sesuaikan port yang telah diubah
      args: "serve -s build -p 3001 build",
      interpreter: "none",
      watch: true,
      merge_logs: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
