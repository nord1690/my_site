<script>
  
$(document).ajaxSuccess(function(event, request, settings) {
   dataLayer.push({
          'event': 'ajaxSuccess',
          'ajaxSuccessData': {
            'url': settings.url || '',
            'data': settings.data || '',
            'responseText': request.success || ''
          }
        });
});
  
</script>
