<script>

  (function ()
  {
    var cookie_tools = 
    {
      set_cookie : function ( name, value, path, domain, exp_y, exp_m, exp_d )
      {
        var cookie_string = name + "=" + escape ( value );
       
        if ( exp_y )
        {
          var expires = new Date ( exp_y, exp_m, exp_d );
          cookie_string += "; expires=" + expires.toGMTString();
        }
       
        if ( path )
              cookie_string += "; path=" + escape ( path );
       
        if ( domain )
              cookie_string += "; domain=" + escape ( domain );
        
        document.cookie = cookie_string;
      },

      get_cookie : function ( cookie_name )
      {
        var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
       
        if ( results )
          return ( unescape ( results[2] ) );
        else
          return null;
      },

      get_url_vars : function ( page_url )
      {
        var vars = {};
        var parts = page_url.replace( /[?&]+([^=&]+)=([^&]*)/gi, function( m, key, value ) 
        {
          vars[ key ] = value;
        });
        return vars;  
      },

      url_organic : function ( referrer ) 
      {
        var organic_sources = 
        [
          { 
            pattern: "yandex.ru",
            key: "yandex"
          }, 
          { 
            pattern: "google",
            key: "google"
          }, 
          {
            pattern: "www.rambler.ru",
            key: "rambler"
          },
          {
            pattern: "yahoo.com",
            key: "yahoo"
          }, 
          {
            pattern: "aport.ru",
            key: "aport"
          }, 
          {
            pattern: "go.mail.ru",
            key: "q"
          }, 
          {
            pattern: "nigma.ru",
            key: "s"
          }, 
          {
            pattern: "webalta.ru",
            key: "q"
          }, 
          {
            pattern: "aport.ru",
            key: "r"
          }, 
          {
            pattern: "poisk.ru",
            key: "text"
          }, 
          {
            pattern: "km.ru",
            key: "sq"
          }, 
          {
            pattern: "liveinternet.ru",
            key: "q" 
          }, 
          {
            pattern: "quintura.ru",
            key: "request"
          }, 
          {
            pattern: "search.qip.ru",
            key: "query"
          }, 
          {
            pattern: "gde.ru",
            key: "keywords"
          }, 
          {
            pattern: "bing.com",
            key: "q"
          }
        ];

        for ( var i = 0; i < organic_sources.length; i++ ) 
        {
          if ( referrer.search( organic_sources[i].pattern ) > -1 )
          {
            var cookie_contents = organic_sources[i].key;
            return cookie_contents
          } else {
            return false
          }
        };
      }
    }  
  }()

</script>
