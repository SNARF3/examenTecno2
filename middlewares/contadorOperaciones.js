let totalOperaciones = 0;

module.exports = (req, res, next) => {
    totalOperaciones++;
    req.totalOperaciones = totalOperaciones;
    next();
};