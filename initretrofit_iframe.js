// Dependencies
___.include('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function() {
  ___.$ = $;
  $.noConflict(true);
  ___.include('//www.cse.unsw.edu.au/~lukegt/___/retrofit_iframe.js');
  ___.include('//www.cse.unsw.edu.au/~lukegt/___/localstorage.js', function() {
    ___.include('//www.cse.unsw.edu.au/~lukegt/___/info.js');
    ___.include('//www.cse.unsw.edu.au/~lukegt/___/commands.js');  
  });
});
