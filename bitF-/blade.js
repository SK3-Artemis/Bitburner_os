/** @param {NS} ns */

export async function main(ns) {


while(true){
	var busy = ns.bladeburner.getCurrentAction();
	if (busy) {} else {
		ns.bladeburner.startAction("general", "training");
	}
await ns.sleep(1000);
}


}