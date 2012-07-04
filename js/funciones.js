/**
 * @author David Felipe Camargo Polo
 */
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
