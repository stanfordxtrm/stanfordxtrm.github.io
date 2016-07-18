// Generated by LiveScript 1.3.1
(function(){
  var block_width, hblock_width, resized;
  block_width = 560;
  hblock_width = block_width / 2;
  resized = function(){
    var window_width, hwindow_width, logo_offset, num_columns, remainder, extra_margin_per_column;
    window_width = $(window).width();
    hwindow_width = window_width / 2;
    logo_offset = hwindow_width - hblock_width;
    $('#logo_offset_div').css('left', logo_offset);
    num_columns = Math.floor(window_width / block_width);
    remainder = window_width - block_width * num_columns;
    extra_margin_per_column = remainder / num_columns;
    return $('.cbox').css('margin-left', extra_margin_per_column / 2);
  };
  $(document).ready(function(){
    $(window).bind('resize', function(evt){
      return resized();
    });
    return resized();
  });
}).call(this);