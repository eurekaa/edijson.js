(function() {
  define(['underscore'], function(u) {
    return {
      is_object: function(object) {
        return u.isObject(object);
      },
      is_equal: function(object, other) {
        return u.isEqual(object, other);
      },
      is_empty: function(object) {
        return u.isEmpty(object);
      },
      is_array: function(object) {
        return u.isArray(object);
      },
      is_function: function(object) {
        return u.isFunction(object);
      },
      is_arguments: function(object) {
        return u.isArguments(object);
      },
      is_string: function(object) {
        return u.isString(object);
      },
      is_number: function(object) {
        return u.isNumber(object);
      },
      is_nan: function(object) {
        return u.isNaN(object);
      },
      is_finite: function(object) {
        return u.isFinite(object);
      },
      is_boolean: function(object) {
        return u.isBoolean(object);
      },
      is_regexp: function(object) {
        return u.isRegExp(object);
      },
      is_null: function(object) {
        return u.isNull(object);
      },
      is_undefined: function(object) {
        return u.isUndefined(object);
      },
      is_defined: function(object) {
        return !u.isUndefined(object);
      },
      is_element: function(object) {
        return u.isElement(object);
      },
      to_upper: function(string) {
        return string.toUpperCase();
      },
      to_lower: function(string) {
        return string.toLowerCase();
      },
      capitalize: function(string) {
        return this.to_upper(string.charAt(0)) + this.to_lower(string.slice(1));
      },
      repeat: function(string, times) {
        if (!times || times < 1) {
          times = 1;
        }
        return new Array(times + 1).join(string);
      },
      starts_with: function(string, token) {
        return new String(string).slice(0, token.length) === token;
      },
      ends_with: function(string, token) {
        return new String(string).slice(-token.length) === token;
      },
      contains: function(string, token) {
        return string.indexOf(token !== -1);
      }
    };
  });

}).call(this);
