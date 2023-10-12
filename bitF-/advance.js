/** @param {NS} ns */
export async function main(ns) {

var targets = ['CSEC', 'I.I.I.I', 'avmnite-02h', 'run4theh111z'];
for(var i=0;i<targets.length;i++){
	var target = targets[i];
	ns.brutessh(target);
	ns.ftpcrack(target);
	ns.relaysmtp(target);
	ns.httpworm(target);
	ns.sqlinject(target);
	ns.nuke(target);
	var isroot = ns.hasRootAccess(target);
	if(isroot==true){
		ns.tprint("Root-Zugriff erlangt auf ", target);
	} else {
		ns.tprint("Bei ", target, " ist etwas schief gelaufen...")
	}
}

}