(function() {
  define(['moment', 'scripts/libs/edijson/utility'], function(moment, utility) {
    return {
      iso_pattern: 'YYYY-MM-DDTHH:mm:ss',
      default_pattern: 'DD-MM-YYYY',
      is_valid: function(date) {
        if (date === void 0 || date === null || date === '') {
          return false;
        }
        if (utility.is_string(date)) {
          date = this.parse(date);
        }
        date = new moment(date);
        return date.isValid();
      },
      parse: function(string, pattern) {
        pattern = utility.is_string(pattern) ? pattern : this.default_pattern;
        return new moment(string, pattern).toDate();
      },
      format: function(date, pattern) {
        pattern = utility.is_undefined(pattern) ? this.default_pattern : pattern;
        date = new moment(date);
        return date.format(pattern);
      },
      from_iso: function(string) {
        return this.parse(string, this.iso_pattern);
      },
      to_iso: function(date) {
        if (utility.is_string(date)) {
          date = this.parse(date);
        }
        return this.format(date, this.iso_pattern) + 'Z';
      }
    };
  });

}).call(this);
