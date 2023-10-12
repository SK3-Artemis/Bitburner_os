/** @param {NS} ns */
export async function main(ns) {


var befehl = ns.args[0];
var arg1 = ns.args[1];
var arg2 = ns.args[2];
var money = ns.getServerMoneyAvailable('home');

if (befehl=='help') {
	ns.tprint("-------- server.script --------")
	ns.tprint("buy, cost, remove, info, kill, killall, letsroll")
}

else if (befehl == 'buy') {
	if (ns.getPurchasedServerCost(arg2) < money) {
		ns.purchaseServer(arg1, arg2);
		ns.tprint("Server '", arg1, "' gekauft mit ", arg2, " RAM");
	} else {
		ns.tprint("Nicht genug Knete");
	}
}
else if (befehl == 'buymax') {
	var proxyname = arg1;
	var maxproxyram = ns.getPurchasedServerMaxRam();
	var proxyram = maxproxyram;
	var money = ns.getServerMoneyAvailable('home');
	if (money < ns.getPurchasedServerCost(maxproxyram)) {proxyram /= 2}
	if (money < ns.getPurchasedServerCost(maxproxyram/2)) {proxyram /= 2}
	if (money < ns.getPurchasedServerCost(maxproxyram/4)) {proxyram /= 2}
	if (money < ns.getPurchasedServerCost(maxproxyram/8)) {proxyram /= 2}
	if (money < ns.getPurchasedServerCost(maxproxyram/16)) {proxyram /= 2}
	if (money < ns.getPurchasedServerCost(maxproxyram/32)) {proxyram /= 2}
	if (money < ns.getPurchasedServerCost(maxproxyram/64)) {proxyram /= 2}
	if (money < ns.getPurchasedServerCost(maxproxyram/128)) {proxyram /= 2}
	if (money < ns.getPurchasedServerCost(maxproxyram/256)) {proxyram /= 2}
	if (money < ns.getPurchasedServerCost(maxproxyram/512)) {proxyram /= 2}
	if (money < ns.getPurchasedServerCost(maxproxyram/1024)) {proxyram /= 2}
	if (money < ns.getPurchasedServerCost(maxproxyram/2048)) {proxyram /= 2}
	else {ns.tprint("Fehler 1")}

	ns.purchaseServer(proxyname, proxyram);
	ns.tprint("Proxy '", proxyname, "' gekauft mit ", Math.floor(proxyram), "GB RAM");
}
else if (befehl == 'buyall') {
	var maxproxies = ns.getPurchasedServerLimit();
	var maxproxyram = ns.getPurchasedServerMaxRam();
	var proxyname = "";
	if (ns.args[1]) {maxproxyram = ns.args[1]}
	for (var i=0;i<maxproxies;i++) {
		proxyname = "p" + i;
		ns.purchaseServer(proxyname, maxproxyram);
		ns.tprint("Proxy '", proxyname, "' bought with ", maxproxyram, " GB of RAM");
	}
}

else if (befehl == 'cost') {
	ns.tprint(ns.getPurchasedServerCost(arg1) / 1000000, "m");
}

else if (befehl == 'kill') {
	var target = arg1
	ns.killall(target)
}

else if (befehl == 'killall') {
	var serverlist = ns.getPurchasedServers()
	for(var i = 0 ; i < serverlist.length ; i++ ) {
		ns.killall(serverlist[i])
		await ns.sleep(10)
	}
}

else if (befehl == 'remove') {
	var proxy = ns.args[1];
	var proxies = ns.getPurchasedServers();
	var proxynames = [];

	if (ns.args[1] == 'all') {
		for (var i=0;i<proxies.length;i++) {
			proxy = proxies[i];
			proxynames.push(proxy);
		}
	} else {
		proxynames.push(proxy);
	}
	for (var i=0;i<proxynames.length;i++) {
		ns.killall(proxynames[i]);
		ns.deleteServer(proxynames[i]);
	}
}

else if (befehl == 'info') {
	ns.tprint("-------- INFORMATIONEN -------");
	ns.tprint("Max Servers: ", ns.getPurchasedServerLimit())
	ns.tprint("Max RAM: ", ns.getPurchasedServerMaxRam())
	ns.tprint("-------- SERVER-LISTE --------")
	var serverlist = ns.getPurchasedServers()
	for(var i = 0 ; i < serverlist.length ; i++ ) {
		ns.tprint("Name: ", serverlist[i], "   RAM: ", ns.getServerMaxRam(serverlist[i]))
		await ns.sleep(100)
	}
}

else if (befehl == 'letsroll') {
	for( var i = 1 ; i < 19 ; i++) {
		var servers = ['4sigma', 'kuai-gong', 'blade', 'clarkinc', 'b-and-a', 'nwo', 'omnitek', 'megacorp', 'ecorp', '4sigma', 'kuai-gong', 'blade', 'clarkinc', 'b-and-a', 'nwo', 'omnitek', 'megacorp', 'ecorp'];
		var proxy = 'p' + i ;
		ns.purchaseServer(proxy, '1048576');
		ns.exec("bigvirus.script", 'home', 1, servers[i], proxy);
		await ns.sleep(10)
	}
}

else {
	tprint("Befehl nicht verstanden...");
}


}