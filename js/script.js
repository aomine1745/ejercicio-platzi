var bancoCliente = 'BCP', cuentaCliente = true, saldoCliente = 1000200, bancoDestino = 'Interbank', cuentaDestino = true, horaTrans = 10, costTrans = (bancoCliente==bancoDestino)?0:100, trans = 1000000;
console.log(cuentaCliente && cuentaDestino && saldoCliente >= (trans + costTrans) && ((horaTrans >= 9 && horaTrans <= 12) || (horaTrans >= 15 && horaTrans <= 20))?'transacción realizada satisfactoriamente! :), su saldo restante es ' + (saldoCliente - (trans + costTrans)) :'transacción no realizada! :(');

// if (cuentaCliente && cuentaDestino && saldoCliente >= (trans + costTrans) && ((horaTrans >= 9 && horaTrans <= 12) || (horaTrans >= 15 && horaTrans <= 20))){
// 	console.log('transacción realizada satisfactoriamente! :)');
// }else{
// 	console.log('transacción no realizada! :(');
// }

//Codigo de un compa :V 

// var cliente_verificado = true;
// var saldo_del_cliente = 1201;
// var destino_verificado = true;
// var hora_de_transferencia = 6;
// var banco_del_cliente = "Bancomer";
// var banco_destino = "Bancomer";
// var monto_a_transferir = 1200;

// if(cliente_verificado && destino_verificado && saldo_del_cliente > monto_a_transferir && (hora_de_transferencia <= 12 || hora_de_transferencia >= 20 && hora_de_transferencia < 15)) {
// 	console.log(`Transferencia exitosa con un costo de $${banco_del_cliente == banco_destino ? 0 : 150}`)
// } else {
// 	console.log('oof')
// }﻿