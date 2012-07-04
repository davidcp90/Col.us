/**
 * @author David Felipe Camargo Polo
 */
$('#calc1').click(function(){
	var lambda1 = $("input#lambda1").val();
	var mu1 = $("input#mu1").val();
	if(lambda1<mu1){
		
	var rtiempoMedio=tiempoMedio(lambda1);
	$("#tmedr1").text(rtiempoMedio);
	
	var rtiempoMedioServ=tiempoMedioServ(mu1);
	$("#tmedservr1").text(rtiempoMedioServ);
	
	var rclienteSist=clienteSist(lambda1,mu1);
	$("#cantespr1").text(rclienteSist);
	
	var rclienteCola=clienteCola(lambda1,mu1);
	$("#cantespcolr1").text(rclienteCola);
	
	var rtiempoSist=tiempoSist(lambda1,mu1);
	$("#tiespr1").text(rtiempoSist);
	
	var rtiempoCola=tiempoCola(lambda1,mu1);
	$("#tiespcolr1").text(rtiempoCola);
	
	var rprobVac=probVacio(lambda1,mu1);
	$("#probvacr1").text(rprobVac);
	
	
	$('#respuestas1').slideDown('slow');
	}
	else{
		$('#error1').html("Revisa el problema &lambda; debe ser menor que &mu; para operar");
		$('#error1').fadeIn('slow');
	}
	
});
$('#calc2').click(function(){
	
});
$('#calc3').click(function(){
	
});
