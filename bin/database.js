(function() {
  define(['jquery', 'scripts/libs/edijson/config', 'scripts/libs/edijson/utility'], function($, config, utility) {
    var rest;
    rest = function(verb, type, target, parameters, options, callback) {
      var async;
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      parameters = parameters || {};
      options = options || {};
      async = (utility.is_defined(options.async) ? options.async : true);
      return $.ajax({
        url: config.EDIJSON_URL,
        type: verb,
        async: async,
        dataType: 'json',
        data: {
          EDIJSON_SECURITY_USERNAME: config.EDIJSON_SECURITY_USERNAME,
          EDIJSON_SECURITY_PASSWORD: config.EDIJSON_SECURITY_PASSWORD,
          url: 'edijson/' + type + '/' + target.replace('.', '/'),
          parameters: JSON.stringify(parameters),
          options: JSON.stringify(options)
        },
        success: function(data) {
          if (data['IsError'] === true) {
            return callback(data, null);
          } else {
            return callback(null, data);
          }
        },
        error: function(xhr, status, err) {
          return callback({
            Message: 'L\'host ' + config.EDIJSON_URL + ' non è raggiungibile.'
          }, null);
        }
      });
    };
    return {
      procedure: function(name, parameters, options, callback) {
        return rest('GET', 'procedure', name, parameters, options, callback);
      },
      select: function(target, parameters, options, callback) {
        return rest('GET', 'table', target, parameters, options, callback);
      },
      insert: function(target, parameters, options, callback) {
        return rest('POST', 'table', target, parameters, options, function(err, data) {
          if (!err) {
            data = data[0];
          }
          return callback(err, data);
        });
      },
      update: function(target, parameters, options, callback) {
        return rest('PUT', 'table', target, parameters, options, function(err, data) {
          if (!err) {
            data = data[0];
          }
          return callback(err, data);
        });
      },
      "delete": function(target, parameters, options, callback) {
        return rest('DELETE', 'table', target, parameters, options, function(err, data) {
          if (!err) {
            data = data[0];
          }
          return callback(err, data);
        });
      }
    };
  });

}).call(this);
