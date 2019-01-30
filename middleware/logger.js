// custom loggerMiddleware to check what requests are being done.

module.exports = function(req, res, next) {
  const date = new Date();
  console.log(`${req.method} request made on ${date}`);

  next();
};
