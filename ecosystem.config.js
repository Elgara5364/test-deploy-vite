module.exports = {
  apps: [
    {
      name: "react-gold",
      script: "npm start",
      args: " npm start",
      error_file: "./pm2-error.log",
      out_file: "./pm2-out.log",
    },
  ],
};
