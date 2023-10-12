/** @param {NS} ns */
export async function main(ns) {

let befehl = ns.args[0]


if(befehl=='help') {
	ns.tprint("HIIIIILFEEEE!!!")
}

else if (befehl=='karma') {
	ns.tail();
	ns.disableLog("sleep");
	while('true'){
		ns.print(ns.heart.break());
		await ns.sleep(500);
	}
}

else if (befehl=='player') {
	ns.tail();
	ns.tprint(ns.getPlayer());
}


else {
	ns.tprint("Befehl nicht verstanden")
}
ns.tprint("Script Beendet.")
}