const authenticate = require('./authenticate');
const isValidId = require('./isvalidId');
const upload = require('./upload');
const validateUpdate = require('./validateUpdate');
const validation = require('./validation');



module.exports = {
    validation,
    isValidId,
    validateUpdate,
    authenticate,
    upload,
};