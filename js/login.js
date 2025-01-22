$(document).on('click','.btn', function(){
var input_badaro = document.getElementById('bdr_name');

/* Login Settings */
var badarolink = 'http://badaro.id',
    text_yes = 'Diproses.',
    text_no = 'Masukkan Kode Voucher lalu klik LOGIN.';

if("" != input_badaro.value){

 /* Call Input Form */
var input_voucher = $("#bdr_name").val();

/* Final Login URL */
var badaro_whatsapp = badarolink + '/login?username=' + input_voucher + '&password=' + input_voucher ;

/* Login Window Open */
window.open(badaro_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = text_yes;
} else {
document.getElementById("text-info").innerHTML = text_no;
}
});
