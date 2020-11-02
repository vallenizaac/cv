var jmlAngkot = 10;
var angkotBeroprasi = 6;

for ( var noAngkot =1; noAngkot <= jmlAngkot; noAngkot++ ){

	if ( noAngkot <= 6 && noAngkot !== 5 && noAngkot !== 3) {
		console.log('Taxi No. ' + noAngkot + ' beroperasi dengan baik.');
	
	} else if( noAngkot === 8 || noAngkot === 10 || noAngkot === 5 || noAngkot === 3) {
		console.log('Taxi No. ' + noAngkot + ' Sedang lembur.');
	} else {
		console.log('Taxi No. ' + noAngkot + ' Sedang diperbaiki.')
	}

} 