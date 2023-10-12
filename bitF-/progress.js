/** @param {NS} ns */
export async function main(ns) {
ns.tprint("--== Progress gestartet ==--");
var befehl = ns.args[0]:


if (befehl=='darkweb') {
	if (ns.getServerMoneyAvailable('home') > 200000 && ns.singularity.connect('darkweb') == false) {
		ns.singularity.purchaseTor();ns.tprint("Purchased TOR-Router...");
	} else {
		if (ns.getServerMoneyAvailable('home')>500000){ns.singularity.purchaseProgram('BruteSSH.exe');ns.tprint("Purchased BruteSSH...")};
		if (ns.getServerMoneyAvailable('home')>1500000){ns.singularity.purchaseProgram('FTPCrack.exe');ns.tprint("Purchased FTPCrack...")};
		if (ns.getServerMoneyAvailable('home')>5000000){ns.singularity.purchaseProgram('relaySMTP.exe');ns.tprint("Purchased relaySMTP...")};
		if (ns.getServerMoneyAvailable('home')>30000000){ns.singularity.purchaseProgram('HTTPWorm.exe');ns.tprint("Purchased HTTPWorm...")};
		if (ns.getServerMoneyAvailable('home')>250000000){ns.singularity.purchaseProgram('SQLInject.exe');ns.tprint("Purchased SQLInject...")};
		ns.singularity.connect('home');
	}
}

if (befehl=='hack') {
	ns.exec('auto-infect.js', 'home', 1, 'hack');
}

if (befehl=='backdoor') {
	if (ns.hasRootAccess('CSEC') && ns.getServerRequiredHackingLevel('CSEC') <= ns.getHackingLevel()) {
		ns.singularity.connect('n00dles');
		ns.singularity.connect('CSEC');
		await ns.singularity.installBackdoor();
		ns.singularity.connect('home');
	}
}


ns.tprint("--== Progress beendet ==--");
}