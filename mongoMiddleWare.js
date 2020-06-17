// const { MongoClient } = require("mongodb");

// module.exports = {
//     function(uri, opts) {
//         if (typeof uri !== 'string') throw new TypeError('Expected uri as a string.');
//         opts = opts || {};
//         let property = opts.property || 'db';
//         delete opts.property;
//         let connection;

//         return function mongoMiddleWare(req, res, next) {
//             if (!connection) {
//                 connection = MongoClient.connect(uri, opts);
//             }
//             connection
//                 .then(function(db) {
//                     req[property] = db;
//                     next();
//                 })
//                 .catch(function(err){
//                     connection = undefined;
//                     next(err);
//                 });
//         }
//     }
// }
