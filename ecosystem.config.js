module.exports = {
  apps: [
    {
      name: "react-gold", // ubah sesuai nama aplikasi yang dibuat
      script: "npx",
      // sesuaikan port yang telah diubah
      args: "serve -s build -p 5173 build",
      interpreter: "none",
      watch: true,
      merge_logs: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
