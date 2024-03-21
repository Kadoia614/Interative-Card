"use strict";

/*#Region Cards-Info*/
function EventsForm(valCard, valForm, defaultVal) {
  var varForm = $(valCard).val();

  if (varForm == '' | varForm == undefined) {
    $(valForm).html(defaultVal);
  } else {
    $(valForm).html(varForm);
  }
}

$('#INumber').on('keyup', function () {
  EventsForm('#INumber', '#number', '0000 0000 0000 0000');
});
$('#IName').on('keyup', function () {
  EventsForm('#IName', '#name', 'Jane Appleseed');
});
$('#IExpire').on('keyup', function () {
  EventsForm('#IExpire', '#expire', '00/00');
});
$('#ICVV').on('keyup', function () {
  EventsForm('#ICVV', '#cvv', '000');
});
/*#Endregion Cards-Info*/

/*#Region logical test cards info*/

$('#Confirm').on('click', function () {
  if (verifyInput()) {
    $('.flipper').addClass('sucess');
  }
});

function verifyInput() {
  var cardsInfo = [{
    campo: '#IName',
    minValue: null
  }, {
    campo: '#INumber',
    minValue: 20
  }, {
    campo: '#IExpire',
    minValue: 5
  }, {
    campo: '#ICVV',
    minValue: 3
  }];
  var fails = 0;
  cardsInfo.forEach(function (e) {
    if (e.campo == '#Name') {
      if ($(e.campo).val() == '' | $('e.campo').val() == undefined) {
        $(e.campo).addClass('ver-fail');
        fails++;
      }
    } else if ($(e.campo).val() < e.minValue) {
      $(e.campo).addClass('ver-fail');
      fails++;
    }

    console.log(e.minValue);
    console.log($(e.campo).val().length);
    console.log("fails ".concat(fails));
  });
  return fails > 0 ? false : true;
}
/*#End region logical test cards info*/

/*#Region Máscaras*/


var mascaraNC = $('#INumber');
mascaraNC.mask('0000 0000 0000 0000', {
  reverse: false
});
var mascaraNC = $('#IExpire');
mascaraNC.mask('00/00', {
  reverse: false
});
var mascaraNC = $('#ICVV');
mascaraNC.mask('000', {
  reverse: false
});
/*#End region Máscaras*/