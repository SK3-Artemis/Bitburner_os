/** @param {NS} ns */
export async function main(ns) {


while('true'){
	var servers = ['.', '4sigma', 'aerocorp', 'aevum-police', 'alpha-ent', 'applied-energetics', 'b-and-a', 'blade', 'catalyst', 'clarkinc', 'computek', 'crush-fitness', 'CSEC', 'defcomm', 'deltaone', 'ecorp', 'foodnstuff', 'fulcrumassets', 'fulcrumtech', 'galactic-cyber', 'global-pharm', 'harakiri-sushi', 'helios', 'hong-fang-tea', 'icarus', 'infocomm', 'iron-gym', 'joesguns', 'johnson-ortho', 'kuai-gong', 'lexo-corp', 'max-hardware', 'megacorp', 'microdyne', 'millenium-fitness', 'n00dles', 'nectar-net', 'neo-net', 'netlink', 'nova-med', 'nwo', 'omega-net', 'omnia', 'omnitek', 'phantasy', 'powerhouse-fitness', 'rho-construction', 'rothman-uni', 'run4theh111z', 'sigma-cosmetics', 'silver-helix', 'snap-fitness', 'solaris', 'stormtech', 'summit-uni', 'syscore', 'taiyang-digital', 'The-Cave', 'the-hub', 'titan-labs', 'unitalife', 'univ-energy', 'vitalife', 'w0r1d_d43m0n', 'zb-def', 'zb-institute', 'zer0', 'zeus-med'];
	for(var i = 0;i<servers.length;i++) {
		var target = servers[i];
		var root = ns.hasRootAccess(target);
		var ports = ns.getServerNumPortsRequired(target);
		var hacklevel = ns.getHackingLevel();
		var targetlevel = ns.getServerRequiredHackingLevel(target);
		
		if (root == false && hacklevel >= targetlevel) {
			ns.tprint(target, " Kein Root Zugriff!");
			var tools = 0;
			if (ns.fileExists("BruteSSH.exe"))  {ns.brutessh(target); tools++}
			if (ns.fileExists("FTPCrack.exe"))  {ns.ftpcrack(target); tools++}
			if (ns.fileExists("relaySMTP.exe")) {ns.relaysmtp(target); tools++}
			if (ns.fileExists("HTTPWorm.exe"))  {ns.httpworm(target); tools++}
			if (ns.fileExists("SQLInject.exe")) {ns.sqlinject(target); tools++}
			if (tools >= ports) 				{ns.nuke(target)}
			if (ns.hasRootAccess(target)==true) {ns.tprint(" Root Zugriff erlangt auf '", target, "'")
			} else {ns.tprint(" Allet scheiße....")}
		}

		if (ns.args[0]=='hack' && root == true && ns.scriptRunning("virus.js", target) == false) {
			var rammax  = ns.getServerMaxRam(target);
			var ramused = ns.getServerUsedRam(target);
			var ramfree = rammax - ramused;
			await ns.scp("virus.js", target);
			var threads = Math.floor(ramfree / ns.getScriptRam("virus.js"));
			if (threads >= 1) {
				ns.exec("virus.js", target, threads, target);
				ns.tprint(target, " Virus gestartet mit ", threads, " Threads");
			}
		}
	}
	await ns.sleep(20000)
}


}