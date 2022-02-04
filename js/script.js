// event pada saat di klik
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap elemen ybs
    var elementTujuan = $(tujuan);
    // console.log(tujuan);

    // pindahkan scroll
    // $('body').scrollTop('200');
    console.log($('body').scrollTop());

    // console.log(elementTujuan.offset().top);

    e.preventDefault();

});