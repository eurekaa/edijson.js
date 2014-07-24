(function() {
  define(['jquery_ui', 'scripts/libs/edijson/database', 'scripts/libs/edijson/utility'], function($, database, utility) {
    return {
      load_stylesheets: function(urls) {
        var link, url, _i, _len;
        if (!utility.is_array(urls)) {
          urls = new Array(urls);
        }
        for (_i = 0, _len = urls.length; _i < _len; _i++) {
          url = urls[_i];
          if (!utility.ends_with(url, '.css')) {
            url += '.css';
          }
          link = document.createElement('link');
          link.type = 'text/css';
          link.rel = 'stylesheet';
          link.href = url;
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        return true;
      },
      load_combo: function(element, url, label_empty, label_id, label_value, callback) {
        var self;
        self = this;
        return database.select(url, {}, function(err, data) {
          var html, item, _i, _len;
          if (err) {
            return self.show_message('Errore di Sistema', err.message);
          }
          html = '<option value="">' + label_empty + '</option>';
          for (_i = 0, _len = data.length; _i < _len; _i++) {
            item = data[_i];
            html += '<option value="' + item[label_id] + '">' + item[label_value] + '</option>';
          }
          $(element).html(html);
          if (callback) {
            return callback(null);
          }
        });
      },
      show_message: function(title, message, buttons) {
        var container;
        if (!buttons) {
          buttons = [
            {
              text: 'chiudi',
              click: function() {
                $(this).dialog('close');
                $(this).dialog('destroy');
                return $(this).empty();
              }
            }
          ];
        }
        container = $('<div>', {
          'html': message
        });
        $('body').append(container);
        return container.dialog({
          show: 'bounce',
          title: title,
          modal: true,
          buttons: buttons
        });
      },
      show_progress: function(title, message, position) {
        var container, progress;
        position = position || {
          my: "center",
          at: "center",
          of: window
        };
        container = $('<div>', {
          'id': 'progressbar'
        }).css({
          'width': '500px',
          'padding': '10px'
        });
        message = $('<div>', {
          'html': message
        }).css({
          'margin-bottom': '20px'
        });
        container.append(message);
        progress = $('<div>').progressbar({
          value: false
        });
        progress.find('.ui-progressbar-value').addClass('ui-corner-all');
        container.append(progress);
        $('body').append(container);
        return container.dialog({
          width: 400,
          show: 'bounce',
          title: title,
          modal: false,
          closeOnEscape: false,
          position: position
        });
      },
      hide_progress: function() {
        var progress;
        progress = $('body').find('#progressbar');
        progress.dialog('close');
        progress.dialog('destroy');
        return progress.remove();
      }
    };
  });

}).call(this);
