module.exports = {
  apps: [
    {
      name: "react-gold", // ubah sesuai nama aplikasi yang dibuat
      script: { start: "vite start" },
      // sesuaikan port yang telah diubah
      args: "serve -s build ",
      interpreter: "none",
    },
  ],
};
