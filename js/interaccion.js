/**
 * @author David Felipe Camargo Polo
 */
$('#calc1').click(function(){
	var lambda1 = $("input#lambda1").val();
	var mu1 = $("input#mu1").val();
	if(lambda2!=0 && mu2!=0 && omi2!=0){
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
}
	else{
		$('#error1').html("Los valores no pueden ser cero");
		$('#error1').fadeIn('slow');
	}
	
});
$('#calc2').click(function(){
	var lambda2 = $("input#lambda2").val();
	var mu2 = $("input#mu2").val();
	var omi2 = $("input#omi2").val();
	if(lambda2!=0 && mu2!=0 && omi2!=0){
	if(lambda2<mu2){
		var rtiempoMedio=tiempoMedio(lambda2);
	$("#tmedr2").text(rtiempoMedio);
	
	var rro=ro(lambda2,mu2);
	$("#ror2").text(rro);
	
	var rtiempoMedioServ=tiempoMedioServ(mu2);
	$("#tmedservr2").text(rtiempoMedioServ);
	
	var rclienteSist=clienteSist(lambda2,mu2);
	$("#cantespr2").text(rclienteSist);
	
	var colaPK=colaMediaPK(lambda2,mu2,omi2);
	$("#cantespcolr2").text(colaPK);
	
	var rtiempoSist=tiempoSist(lambda2,mu2);
	$("#tiespr2").text(rtiempoSist);
	
	var tiempoPK=tiempocolaPK(lambda2,mu2,omi2);
	$("#tiespcolr2").text(tiempoPK);
	
	var rprobVac=probVacio(lambda2,mu2);
	$("#probvacr2").text(rprobVac);
	
	$('#respuestas2').slideDown('slow');
	}
	else{
		$('#error2').html("Revisa el problema &lambda; debe ser menor que &mu; para operar");
		$('#error2').fadeIn('slow');
	}
	}
	else{
		$('#error2').html("Los valores no pueden ser cero");
		$('#error2').fadeIn('slow');
	}
});
$('#calc3').click(function(){
	var lambda3 = $("input#lambda3").val();
	var mu3 = $("input#mu3").val();
	var omi3 = $("input#omi3").val();
	if(lambda3!=0 && mu3!=0 && omi3!=0){
	if(lambda3<mu3){
		var rtiempoMedio=tiempoMedio(lambda3);
	$("#tmedr2").text(rtiempoMedio);
	
	var rro=ro(lambda2,mu2);
	$("#ror2").text(rro);
	
	var rtiempoMedioServ=tiempoMedioServ(mu2);
	$("#tmedservr2").text(rtiempoMedioServ);
	
	var rclienteSist=clienteSist(lambda2,mu2);
	$("#cantespr2").text(rclienteSist);
	
	var colaPK=colaMediaPK(lambda2,mu2,omi2);
	$("#cantespcolr2").text(colaPK);
	
	var rtiempoSist=tiempoSist(lambda2,mu2);
	$("#tiespr2").text(rtiempoSist);
	
	var tiempoPK=tiempocolaPK(lambda2,mu2,omi2);
	$("#tiespcolr2").text(tiempoPK);
	
	var rprobVac=probVacio(lambda2,mu2);
	$("#probvacr2").text(rprobVac);
	
	$('#respuestas2').slideDown('slow');
	}
	else{
		$('#error2').html("Revisa el problema &lambda; debe ser menor que &mu; para operar");
		$('#error2').fadeIn('slow');
	}
	}
	else{
		$('#error2').html("Los valores no pueden ser cero");
		$('#error2').fadeIn('slow');
	}
});
