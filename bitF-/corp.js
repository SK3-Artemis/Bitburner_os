/** @param {NS} ns */
export async function main(ns) {

var befehl = ns.args[0];

if(befehl=='status') {
	var corpdata = ns.corporation.getCorporation();
	var corp = corpdata[0];
	
	ns.tprint(corpdata["corp"]);
}

else {
	ns.tprint("Befehl nicht verstanden...");
}

}