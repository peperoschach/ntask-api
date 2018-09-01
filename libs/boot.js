module.exports = app => {
  app.listen(app.get("port"), () => {
    console.log(`Ntask API - running in ${app.get("port")}`);
  });
};