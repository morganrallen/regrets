module.exports = function(p, cb) {
  p.then(function(res) {
    cb(null, res);
  });

  p.catch(function(err) {
    cb(err);
  });
}
