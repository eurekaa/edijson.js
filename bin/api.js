(function() {
  define(['scripts/libs/edijson/config', 'scripts/libs/edijson/utility'], function(config, utility) {
    var rpc;
    rpc = function(verb, api, parameters, options, callback) {
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
          url: 'edijson/api/' + api.replace('.', '/'),
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
      call: function(api, parameters, options, callback) {
        return rpc('GET', api, parameters, options, callback);
      }
    };
  });

}).call(this);
