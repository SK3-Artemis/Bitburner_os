/** @param {NS} ns */
export async function main(ns) {

var befehl = ns.args[0];

if ( befehl == "help") {
	ns.tprint("Hacknet Node Automation Script");
}

else if (befehl == "auto")
	while(true) {

		var hashes = ns.hacknet.numHashes();
		for ( var i=0 ; i<hashes/4 ; i++ ) {
			ns.hacknet.spendHashes("Sell for Money");
		}

		var nodes = ns.hacknet.numNodes();
		for(var i=0;i<nodes;i++){
			ns.hacknet.upgradeCore(i);
			ns.hacknet.upgradeLevel(i);
			ns.hacknet.upgradeRam(i);
		}

	await ns.sleep(10000);
	}

else {
	ns.tprint("Befehl nicht verstanden...");
}

}asdadadasd