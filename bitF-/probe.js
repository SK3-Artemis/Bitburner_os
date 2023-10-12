export async function main(ns) {

var befehl = ns.args[0];
var servers = ['.', '4sigma', 'aerocorp', 'aevum-police', 'alpha-ent', 'applied-energetics', 'avmnite-02h', 'b-and-a', 'blade', 'catalyst', 'clarkinc', 'computek', 'crush-fitness', 'CSEC', 'defcomm', 'deltaone', 'ecorp', 'foodnstuff', 'fulcrumassets', 'fulcrumtech', 'galactic-cyber', 'global-pharm', 'harakiri-sushi', 'helios', 'hong-fang-tea', 'I.I.I.I', 'icarus', 'infocomm', 'iron-gym', 'joesguns', 'johnson-ortho', 'kuai-gong', 'lexo-corp', 'max-hardware', 'megacorp', 'microdyne', 'millenium-fitness', 'n00dles', 'nectar-net', 'neo-net', 'netlink', 'nova-med', 'nwo', 'omega-net', 'omnia', 'omnitek', 'phantasy', 'powerhouse-fitness', 'rho-construction', 'rothman-uni', 'run4theh111z', 'sigma-cosmetics', 'silver-helix', 'snap-fitness', 'solaris', 'stormtech', 'summit-uni', 'syscore', 'taiyang-digital', 'The-Cave', 'the-hub', 'titan-labs', 'unitalife', 'univ-energy', 'vitalife', 'w0r1d_d43m0n', 'zb-def', 'zb-institute', 'zer0', 'zeus-med'];

function Probe(target) {
	var level = ns.getServerRequiredHackingLevel(target);
	var ports = ns.getServerNumPortsRequired(target);3321
	var moneynow = Math.round(ns.getServerMoneyAvailable(target));
	var moneymax = Math.round(ns.getServerMaxMoney(target));
	var secnow = Math.round(ns.getServerSecurityLevel(target));
	var secmin = Math.round(ns.getServerMinSecurityLevel(target));
	var ram = Math.round(ns.getServerMaxRam(target));
	var ramused = Math.round(ns.getServerUsedRam(target));
	var ramfree = ram - ramused;
	var moneymaxk = moneymax / 1000;
	var moneymaxm = moneymax / 1000000;
	var moneymaxb = moneymax / 1000000000;
	var moneyfill = Math.round(moneynow / (moneymax / 100));
	var virus = ns.scriptRunning("virus.script", target); if(virus==true) {var virusaktiv = "yay!"} else {var virusaktiv = "nay..."};
	var root = ns.hasRootAccess(target); if(root==true) {var isroot = "yay!"} else {var isroot = "nay..."}
	/*changing outlines*/ if(i % 2 == 0) {var outlines = "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"} else {var outlines = ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"};
	/*format maxmoney*/ if(moneymax < 1000000) {var moneymaxshown = moneymaxk} else {}; if(moneymax < 1000000000) {var moneymaxshown = moneymaxm} else {};  if(moneymax > 1000000000) {var moneymaxshown = Math.round(moneymaxb)} else {};
	/*format maxmoney*/if(moneymax < 1000000) {var moneymaxscale = "k"} else {}; if(moneymax < 1000000000) {var moneymaxscale = "m"} else {};  if(moneymax > 1000000000) {var moneymaxscale = "b"} else {};
	ns.tprint(outlines);
	ns.tprint(" --> ", target.toUpperCase());
	ns.tprint("Level: ", level, "  Ports: ", ports, "  Root: ", isroot, "  Virus: ", virusaktiv);
	ns.tprint("Security: ", secnow, " / ", secmin);
	ns.tprint("Money: ", moneyfill, "%  ", moneymaxshown, moneymaxscale);
	ns.tprint("Ram: (t/f) ", ram, "/", ramfree);
	ns.tprint(outlines);
}

function Probe2(target) {
	var ausgabe = [];

	var level = ns.getServerRequiredHackingLevel(target);
	ausgabe.push(level);
	return ausgabe;
	var ports = ns.getServerNumPortsRequired(target);3321
	var moneynow = Math.round(ns.getServerMoneyAvailable(target));
	var moneymax = Math.round(ns.getServerMaxMoney(target));
	var secnow = Math.round(ns.getServerSecurityLevel(target));
	var secmin = Math.round(ns.getServerMinSecurityLevel(target));
	var ram = Math.round(ns.getServerMaxRam(target));
	var ramused = Math.round(ns.getServerUsedRam(target));
	var ramfree = ram - ramused;
	var moneymaxk = moneymax / 1000;
	var moneymaxm = moneymax / 1000000;
	var moneymaxb = moneymax / 1000000000;
	var moneyfill = Math.round(moneynow / (moneymax / 100));
	var virus = ns.scriptRunning("virus.script", target); if(virus==true) {var virusaktiv = "yay!"} else {var virusaktiv = "nay..."};
	var root = ns.hasRootAccess(target); if(root==true) {var isroot = "yay!"} else {var isroot = "nay..."}
//	/*changing outlines*/ if(i % 2 == 0) {var outlines = "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"} else {var outlines = ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"};
//	/*format maxmoney*/ if(moneymax < 1000000) {var moneymaxshown = moneymaxk} else {}; if(moneymax < 1000000000) {var moneymaxshown = moneymaxm} else {};  if(moneymax > 1000000000) {var moneymaxshown = Math.round(moneymaxb)} else {};
//	/*format maxmoney*/if(moneymax < 1000000) {var moneymaxscale = "k"} else {}; if(moneymax < 1000000000) {var moneymaxscale = "m"} else {};  if(moneymax > 1000000000) {var moneymaxscale = "b"} else {};
//	ns.tprint(outlines);
//	ns.tprint(" --> ", target.toUpperCase());
//	ns.tprint("Level: ", level, "  Ports: ", ports, "  Root: ", isroot, "  Virus: ", virusaktiv);
//	ns.tprint("Security: ", secnow, " / ", secmin);
//	ns.tprint("Money: ", moneyfill, "%  ", moneymaxshown, moneymaxscale);
//	ns.tprint("Ram: (t/f) ", ram, "/", ramfree);
//	ns.tprint(outlines);
}

if (befehl == "maxmoney") {
	for (var i=0;i<servers.length;i++) {
		var target = servers[i];
		var money = Math.floor(ns.getServerMaxMoney(target));
		ns.tprint(money);
	}
}

else if (befehl == "hosts") {
	for (var i=0;i<servers.length;i++) {
		ns.tprint(servers[i]);
	}
} 

else if (befehl == "all") {
	for (var i=0;i<servers.length;i++) {
		var target = servers[i];
		Probe(target);
	}
} 

else if (befehl=="root") {
	var rootservers = [];
	for (var i=0;i<servers.length;i++) {
		var isroot = ns.hasRootAccess(servers[i]);
		if (isroot == true) {
			var target = servers[i];
			ns.tprint(Math.floor(ns.getServerMoneyAvailable(target)/(ns.getServerMaxMoney(target)/100)),"% von ", Math.floor((ns.getServerMaxMoney(target))/1000000), "M bei Host: ", target);
		}
	}
}

else if (befehl=="table") {
	let serverlist = [];

	for (var i=0; i<servers.length; i++) {
		let moneymax = ns.getServerMoneyAvailable(servers[i]);
		serverlist.push(moneymax);
		serverlist.sort();
	}

	ns.tprint(serverlist);
}

else {
	var target = befehl;
	ns.tprint(Probe(target));
}


}