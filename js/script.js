$(function () {
  $('[data-toggle="popover"]').popover();
});

// Index
function toggleChangeProvider() {
  var $changeBtn = $('#change-provider-btn');

  $('#change-provider-select').prop('disabled', function (i, val) {
    return !val;
  });

  if ($changeBtn.text() == "Change Partner System") {
    $changeBtn.text("Cancel");
  } else {
    $changeBtn.text("Change Partner System");
  }

  $('#save-provider-btn').toggle();
}

$('#change-provider-btn, #save-provider-btn').click(function (e) {
  e.preventDefault();
  toggleChangeProvider();
});

// Screen 1
$('#find-doctors-btn').click(function (e) {
  e.preventDefault();
  $('#search-results').show();
});
