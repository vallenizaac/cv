var item = prompt('masukan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink, minuman bersoda)');

switch( item ) {
	case 'nasi' :
	case 'daging' :
	case 'susu' :
		alert('makanan / minuman SEHAT!');
		break;
	case 'hamburger' :
	case 'softdrink' :
	case 'minuman bersoda' :
		alert('makanan / minuman TIDAK SEHAT!');
		break;
}