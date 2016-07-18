block_width = 560
hblock_width = block_width / 2

resized = ->
  # center the logo at the top
  window_width = $(window).width()
  hwindow_width = window_width / 2
  logo_offset = hwindow_width - hblock_width
  $('#logo_offset_div').css('left', logo_offset)
  # add enough padding on left to ensure that contents get centered
  num_columns = Math.floor(window_width /  block_width)
  remainder = window_width - block_width * num_columns
  extra_margin_per_column = remainder / num_columns
  $('.cbox').css('margin-left', extra_margin_per_column / 2)

$(document).ready ->
  $(window).bind 'resize', (evt) ->
    resized()
  resized()