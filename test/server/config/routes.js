// Routes for testing

var controllers = require('../controllers');

module.exports = {

  /* Behavior routes */
  'post /id-required'    : controllers.behavior.idRequired,
  'put /id-name-required': controllers.behavior.idAndNameRequired,
  'put /three-params'    : controllers.behavior.onlyThreeParams,
  'delete /by-type'      : controllers.behavior.byType,
  'get /by-type-parsed'  : controllers.behavior.byTypeAndParsed,
  'post /optional-parameter': controllers.behavior.optionalParameter,
  'post /optional-parameter-by-type': controllers.behavior.optionalParameterByType,
  'post /some-optional-parameters': controllers.behavior.someOptionalParameters,
  'post /no-default-error': controllers.behavior.errorWithNoResponse,
  'post /complex-no-default-error': controllers.behavior.complexNoErrorResponse,

  /* Integer */
  'post /integer': controllers.integer,

  /* Float */
  'post /float': controllers.float,

  /* String */
  'post /string': controllers.string,

  /* Email */
  'post /email'       : controllers.email.index,
  'post /google-email': controllers.email.googleEmail,

  /* Url */
  'post /url': controllers.url,

  /* Alphanumeric */
  'post /alphanumeric': controllers.alphanumeric,

  /* Alpha */
  'post /alpha': controllers.alpha,

  /* Numeric */
  'post /numeric': controllers.numeric

};
