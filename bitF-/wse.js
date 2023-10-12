/** @param {NS} ns */
export async function main(ns) {

var befehl = ns.args[0];

if (befehl == 'status') {
	var targets = [];

	if (ns.args[1]) {
		var target = ns.args[1];
		targets.push(target);
	} else {
		targets = ns.stock.getSymbols();
	}
	
	for (var i=0; i < targets.length; i++) {
		var target = targets[i];
		var price = ns.stock.getPrice(target);
		var askprice = ns.stock.getAskPrice(target);
		var bidprice = ns.stock.getBidPrice(target);
		var forecast = ns.stock.getForecast(target);
		var position = ns.stock.getPosition(target);
		var maxshares = ns.stock.getMaxShares(target);
		var volatility = ns.stock.getVolatility(target);

		ns.tprint("---------- ", target, " ----------");
		ns.tprint("Price: ", price);
		ns.tprint("askPrice: ", askprice);
		ns.tprint("bidPrice: ", bidprice);
		ns.tprint("Forecast: ", forecast);
		ns.tprint("Volatility: ", volatility);
		ns.tprint("Position: ", position);
		ns.tprint("maxShares: ", maxshares);
	}
}

else if (befehl == 'buy') {
	stocks = ns.stock.getSymbols();

	ns.stock.buyStock(socks[0], )
}



else {
	ns.tprint("Befehl nicht verstanden...");
}
}