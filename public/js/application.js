$(document).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    $('#tweet').attr('disabled', 'disabled');

    $.ajax({
      url: '/tweet/now',
      type: 'post',
      data: $(this).serialize()
    }).done(function(response){
      $('#processing').hide();
      $('#results').html("<span>you tweeted well</span>");
      $('#tweet').removeAttr('disabled');
    });
    $('#processing').show();
  });
});
