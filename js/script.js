const myStorage = window.localStorage;
let vhd_gz = myStorage.getItem('vhd') ?? 0;
let kelas = myStorage.getItem('kls') ?? [];

vhd_gz = 0;
// kelas = [];
myStorage.setItem('vhd', vhd_gz);
// myStorage.setItem('kls', kelas);

$(function () {
  //  save chipping in
  for (let i = 0; i < kelas.length; i++) {
    $(`.${kelas[i]}-`).toggleClass('mojaz');
    $(`.${kelas[i]}-`).toggleClass('slted');
    $(`.${kelas[i]}uw`).toggleClass('clked');
  }
  $('#crt').html(`${vhd_gz}/142`);

  // button left-right
  $('#scroll-left').click(function () {
    if ($('.main').hasClass('prim')) {
      $('.main').addClass('hide');
      $('.main').removeClass('main');
      $('.sec').addClass('main');
      $('.sec').removeClass('hide');
    } else if ($('.main').hasClass('sec')) {
      $('.main').addClass('hide');
      $('.main').removeClass('main');
      $('.history').addClass('main');
      $('.history').removeClass('hide');
    } else if ($('.main').hasClass('history')) {
      $('.main').addClass('hide');
      $('.main').removeClass('main');
      $('.prim').addClass('main');
      $('.prim').removeClass('hide');
    }
  });

  $('#scroll-right').click(function () {
    if ($('.main').hasClass('prim')) {
      $('.main').addClass('hide');
      $('.main').removeClass('main');
      $('.history').addClass('main');
      $('.history').removeClass('hide');
    } else if ($('.main').hasClass('history')) {
      $('.main').addClass('hide');
      $('.main').removeClass('main');
      $('.sec').addClass('main');
      $('.sec').removeClass('hide');
    } else if ($('.main').hasClass('sec')) {
      $('.main').addClass('hide');
      $('.main').removeClass('main');
      $('.prim').addClass('main');
      $('.prim').removeClass('hide');
    }
  });
  $('.saver').click(function () {
    alert('in gabeliyat hanoz dorost nashode');
  });

  // button prim
  // $('button').each(function () {
  //   this.queryseletctor().addEventListener();
  // });

  $('.btn').click(function (e) {
    let idd = e.target.id;
    $(`.${idd}m`).toggleClass('mojaz');
    $(`.${idd}-`).toggleClass('slted');
    $(`.${idd}uw`).toggleClass('clked');

    if ($(`.${idd}-`).hasClass('slted')) {
      vhd_gz += 3;
      $('#crt').html(`${vhd_gz}/142`);
    } else {
      vhd_gz = vhd_gz - 3 >= 0 ? vhd_gz : 3;
      vhd_gz -= 3;
      $('#crt').html(`${vhd_gz}/142`);
    }
    console.log(kelas);
    myStorage.setItem('vhd', vhd_gz);
    myStorage.setItem('kls', kelas);
  });
});
