module.exports = {
  apps: [
    {
      name: "react-gold", // ubah sesuai nama aplikasi yang dibuat
      script: "start",
      // sesuaikan port yang telah diubah
      args: "start -s build ",
      interpreter: "none",
      watch: true,
      merge_logs: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
