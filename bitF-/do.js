/** @param {NS} ns */
export async function main(ns) {

var befehl = ns.args[0];


if (befehl=='help') {
	ns.tprint("HIIIIILFEEEE!!!")}


else if(befehl=='killall') {
	var servers = ['.', '4sigma', 'aerocorp', 'aevum-police', 'alpha-ent', 'applied-energetics', 'b-and-a', 'blade', 'catalyst', 'clarkinc', 'computek', 'crush-fitness', 'CSEC', 'defcomm', 'deltaone', 'ecorp', 'foodnstuff', 'fulcrumassets', 'fulcrumtech', 'galactic-cyber', 'global-pharm', 'harakiri-sushi', 'helios', 'hong-fang-tea', 'icarus', 'infocomm', 'iron-gym', 'joesguns', 'johnson-ortho', 'kuai-gong', 'lexo-corp', 'max-hardware', 'megacorp', 'microdyne', 'millenium-fitness', 'n00dles', 'nectar-net', 'neo-net', 'netlink', 'nova-med', 'nwo', 'omega-net', 'omnia', 'omnitek', 'phantasy', 'powerhouse-fitness', 'rho-construction', 'rothman-uni', 'run4theh111z', 'sigma-cosmetics', 'silver-helix', 'snap-fitness', 'solaris', 'stormtech', 'summit-uni', 'syscore', 'taiyang-digital', 'The-Cave', 'the-hub', 'titan-labs', 'unitalife', 'univ-energy', 'vitalife', 'w0r1d_d43m0n', 'zb-def', 'zb-institute', 'zer0', 'zeus-med'];
	for(var i = 0;i<servers.length;i++) {
		ns.killall(servers[i])}
}


else if (befehl=='tor') {
	if (ns.getServerMoneyAvailable("home") >= 200000){
		ns.singularity.purchaseTor()}
	else {
		ns.tprint("Not enough money!")}
}


else if (befehl=="hacktools") {
	const tools = ns.singularity.getDarkwebPrograms();
	for (var i=0;i<tools.length;i++){
		ns.singularity.purchaseProgram(tools[i])
	}
}

/*
else if (befehl=="upgrade_home") {
	let cost = Math.floor(ns.singularity.getUpgradeHomeRamCost());
	if (cost <= ns.getServerMoneyAvailable("home")) {
		ns.singularity.upgradeHomeRam();
		ns.tprint("Upgraded home server to ", Math.floor(ns.getServerMaxRam("home")), "GB for ", cost, "$");
	}
}
*/


else if(befehl=='boost') {
	var proxy = ns.args[1];
	var target = ns.args[2];
	var threads = ns.getServerMaxRam(proxy) / 2.3;
	ns.killall(proxy);
	ns.scp("boost.js", proxy);
	ns.exec("boost.js", proxy, threads, target)
}


else if(befehl=='bigvirus') {
	var proxy = ns.args[1]
	var target = ns.args[2]
	var delay = ns.args[3]
	ns.scp("virus.js", proxy)
	ns.killall(proxy);
	for(var i=0;i<8;i++){
		var threads = (ns.getServerMaxRam(proxy)/2.45) / 8;
		ns.exec("virus.js", proxy, threads, target, i, i);}
}


else if(befehl=='batchvirus') {
//	var servers = ['.', '4sigma', 'aerocorp', 'aevum-police', 'alpha-ent', 'applied-energetics', 'b-and-a', 'blade', 'catalyst', 'clarkinc', 'computek', 'crush-fitness', 'CSEC', 'defcomm', 'deltaone', 'ecorp', 'foodnstuff', 'fulcrumassets', 'fulcrumtech', 'galactic-cyber', 'global-pharm', 'harakiri-sushi', 'helios', 'hong-fang-tea', 'icarus', 'infocomm', 'iron-gym', 'joesguns', 'johnson-ortho', 'kuai-gong', 'lexo-corp', 'max-hardware', 'megacorp', 'microdyne', 'millenium-fitness', 'n00dles', 'nectar-net', 'neo-net', 'netlink', 'nova-med', 'nwo', 'omega-net', 'omnia', 'omnitek', 'phantasy', 'powerhouse-fitness', 'rho-construction', 'rothman-uni', 'run4theh111z', 'sigma-cosmetics', 'silver-helix', 'snap-fitness', 'solaris', 'stormtech', 'summit-uni', 'syscore', 'taiyang-digital', 'The-Cave', 'the-hub', 'titan-labs', 'unitalife', 'univ-energy', 'vitalife', 'w0r1d_d43m0n', 'zb-def', 'zb-institute', 'zer0', 'zeus-med'];
	var proxy = ns.args[1];
	var target = ns.args[2];

	ns.killall(proxy);
	var factor_hack = 0.15;
	var factor_grow = 0.70;
	var factor_weaken = 0.15;
	var threads_hack = (ns.getServerMaxRam(proxy) / 2.1) * factor_hack;
	var threads_grow = (ns.getServerMaxRam(proxy) / 1.75) * factor_grow;
	var threads_weaken = (ns.getServerMaxRam(proxy) / 1.75) * factor_weaken;
	ns.scp("hack.js", proxy);
	ns.scp("grow.js", proxy);
	ns.scp("weaken.js", proxy);

	ns.exec("hack.js", proxy, threads_hack, target, 0);
	ns.exec("grow.js", proxy, threads_grow, target, 0);
	ns.exec("weaken.js", proxy, threads_weaken, target, 0);

}

else if(befehl=='massvirus') {
	var proxy = ns.args[1];
	var target = ns.args[2];
	var servers = ['ecorp', 'megacorp', 'blade', 'kuai-gong', 'clarkinc', 'nwo', '4sigma', 'omnitek', 'b-and-a', 'global-pharm', 'zeus-med', 'fulcrumtech', 'deltaone', 'nova-med', 'univ-energy', 'aerocorp', 'stormtech', 'zb-institute', 'unitalife', 'applied-energetics', 'omnia', 'zb-def', 'icarus', 'powerhouse-fitness', 'defcomm', 'solaris', 'titan-labs', 'taiyang-digital', 'galactic-cyber', 'vitalife', 'infocomm', 'lexo-corp', 'alpha-ent', 'microdyne', 'helios', 'rho-construction', 'syscore', 'snap-fitness'];
	var scalemoney = [5958, 4818, 3522, 2872, 2742, 2334, 2201, 2021, 1675, 178, 166, 157, 149, 129, 122, 122, 117, 117, 113, 111, 109, 105, 104, 100, 99, 90, 90, 90, 89, 86, 86, 84, 77, 75, 62, 59, 56, 1];

	ns.killall(proxy)
	ns.scp("virus.js", proxy);

	for(var i = 0; i < servers.length; i++){
		var target = servers[i];
		var threads = ((scalemoney[i]*100)/31086) / 100 * (ns.getServerMaxRam(proxy)/2.45)
		ns.tprint("threads: ", threads);
		ns.exec("virus.js", proxy, threads, target, 0, i);
	await ns.sleep(10)
	}
}

else if(befehl=='massvirus2') {
	var proxies = ns.getPurchasedServers();
	var servers = ['ecorp', 'megacorp', 'blade', 'kuai-gong', 'clarkinc', 'nwo', '4sigma', 'omnitek', 'b-and-a', 'global-pharm', 'zeus-med', 'fulcrumtech', 'deltaone', 'nova-med', 'univ-energy', 'aerocorp', 'stormtech', 'zb-institute', 'unitalife', 'applied-energetics', 'omnia', 'zb-def', 'icarus', 'powerhouse-fitness', 'defcomm', 'solaris', 'titan-labs', 'taiyang-digital', 'galactic-cyber', 'vitalife', 'infocomm', 'lexo-corp', 'alpha-ent', 'microdyne', 'helios', 'rho-construction', 'syscore', 'snap-fitness'];

	for(var i = 0; i < proxies.length; i++){
		var proxy = proxies[i];
		var target = servers[i];

		ns.killall(proxy);
		ns.exec("control.js", "home", 1, "batchvirus", proxy, target);
		await ns.sleep(50)
	}
}


else {
	ns.tprint("Befehl nicht verstanden")
}
ns.tprint("Script Beendet.")
}