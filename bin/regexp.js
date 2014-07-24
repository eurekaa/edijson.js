(function() {
  define(['scripts/libs/edijson/utility'], function(utility) {
    return {
      test: function(string, regexp) {
        var match;
        if (utility.is_string(regexp) && utility.is_defined(this[regexp])) {
          regexp = this[regexp];
        }
        regexp = new RegExp(regexp);
        match = string.match(regexp);
        return match && match.length > 0;
      },
      email: '^([a-zA-Z0-9]+([\.+_-][a-zA-Z0-9]+)*)@(([a-zA-Z0-9]+((\.|[-]{1,2})[a-zA-Z0-9]+)*)\.[a-zA-Z]{2,6})$'
    };
  });

}).call(this);
