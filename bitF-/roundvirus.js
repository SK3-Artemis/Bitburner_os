/** @param {NS} ns */
export async function main(ns) {


var servers = ['.', '4sigma', 'aerocorp', 'aevum-police', 'alpha-ent', 'applied-energetics', 'b-and-a', 'blade', 'catalyst', 'clarkinc', 'computek', 'crush-fitness', 'CSEC', 'defcomm', 'deltaone', 'ecorp', 'foodnstuff', 'fulcrumassets', 'fulcrumtech', 'galactic-cyber', 'global-pharm', 'harakiri-sushi', 'helios', 'hong-fang-tea', 'icarus', 'infocomm', 'iron-gym', 'joesguns', 'johnson-ortho', 'kuai-gong', 'lexo-corp', 'max-hardware', 'megacorp', 'microdyne', 'millenium-fitness', 'n00dles', 'nectar-net', 'neo-net', 'netlink', 'nova-med', 'nwo', 'omega-net', 'omnia', 'omnitek', 'phantasy', 'powerhouse-fitness', 'rho-construction', 'rothman-uni', 'run4theh111z', 'sigma-cosmetics', 'silver-helix', 'snap-fitness', 'solaris', 'stormtech', 'summit-uni', 'syscore', 'taiyang-digital', 'The-Cave', 'the-hub', 'titan-labs', 'unitalife', 'univ-energy', 'vitalife', 'w0r1d_d43m0n', 'zb-def', 'zb-institute', 'zer0', 'zeus-med'];
var proxy = ns.args[0];

for (var i=0;i<servers.length;i++){
	var server = servers[i];
	var root = ns.hasRootAccess(server);
	if (root = true) {
		var secnow = ns.getServerSecurityLevel(server);
		var secmin = ns.getServerMinSecurityLevel(server);
		var secthresh = secnow + 5;
		ns.tprint("----- ", server, " -----");
		ns.tprint("hackAnalyze (Get the part of money stolen with a single thread): ", ns.hackAnalyze(server));
		ns.tprint("hackAnalyzeChance (Get the chance of successfully hacking a server): ", ns.hackAnalyzeChance(server));
		ns.tprint("hackAnalyzeSecurity 100 (Get the security increase for a number of thread): ", ns.hackAnalyzeSecurity(100, server));
		ns.tprint("hackAnalyzeThreads 100 (The number of threads needed to hack the server for hackAmount money): ", ns.hackAnalyzeThreads(server, 100))
		ns.tprint("WeakenAnalyze 100, 1 (The security decrease per thread and cores): ", ns.weakenAnalyze(100, 1))
	}
	
}


}