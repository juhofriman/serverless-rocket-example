'use strict';

module.exports.send = (event, context, callback) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({message: 'Rockets are cool'})});
};
