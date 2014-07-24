(function() {
  define(['scripts/libs/edijson/utility'], function(utility) {
    return {
      get: function(name) {
        var value;
        value = sessionStorage.getItem(name);
        if (utility.starts_with(value, '{') && utility.ends_with(value, '}') || (utility.starts_with(value, '[') && utility.ends_with(value, ']'))) {
          value = JSON.parse(value);
        }
        return value;
      },
      set: function(name, value) {
        if (utility.is_object(value)) {
          value = JSON.stringify(value);
        }
        return sessionStorage.setItem(name, value);
      },
      remove: function(name) {
        return sessionStorage.removeItem(name);
      },
      clear: function() {
        return sessionStorage.clear();
      }
    };
  });

}).call(this);
