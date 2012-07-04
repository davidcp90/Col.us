/**
 * @author David Felipe Camargo Polo
 */
//FUNCIONES PARA MODELOS
//Para M/G/1
function tiempoMedio(lambda){
	var tiempoMed=1/lambda;
	return tiempoMed;
};
function tiempoMedioServ(mu){
	var tiempoMedS=1/mu;
	return tiempoMedS;
};
function clienteSist(lambda,mu){
	var clienteS=lambda/(mu-lambda);
	return clienteS;
};
function clienteCola(lambda,mu){
	var clienteC=(lambda*lambda)/(mu*(mu-lambda));
	return clienteC;
};
function tiempoSist(lambda,mu){
	var tiempoS=1/(mu-lambda);
	return tiempoS;
};
function tiempoCola(lambda,mu){
	var tiempoC=lambda/(mu*(mu-lambda));
	return tiempoC;
};
function probVacio(lambda,mu){
	var probV=1-(lambda-mu);
	return probV;
}
//Para M/G/1
function ro(lambda,mu){
	var ro=lambda/mu;
	return ro;
}
function colaMediaPK(lambda,mu,omi){
	var roc=ro(lambda,mu);
	var colaMPK=roc+(((roc*roc)+(lambda*lambda)*(omi))/2*(1-roc));
	return colaMPK;
}
function tiempocolaPK(lambda,mu,omi){
	var roc=ro(lambda,mu);
	var tiPK=((roc*roc)+(lambda*lambda)*(omi))/(2*lambda)*(1-roc);
	return tiPK;
}
