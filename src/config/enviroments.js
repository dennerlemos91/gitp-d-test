require('nodeenv');

module.exports = {
  port: process.env.PORT || 3333,
  contextPath: process.env.CONTEXT_PATH || '/api/radardev'
};
