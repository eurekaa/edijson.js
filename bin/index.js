(function() {
  define(['scripts/libs/edijson/api', 'scripts/libs/edijson/database', 'scripts/libs/edijson/date', 'scripts/libs/edijson/regexp', 'scripts/libs/edijson/session', 'scripts/libs/edijson/ui', 'scripts/libs/edijson/utility'], function(api, database, date, regexp, session, ui, utility) {
    return {
      api: api,
      database: database,
      date: date,
      regexp: regexp,
      session: session,
      ui: ui,
      utility: utility
    };
  });

}).call(this);
