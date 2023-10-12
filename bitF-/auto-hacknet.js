/** @param {NS} ns */
export async function main(ns) {


while('true') {
	var nodes = ns.hacknet.numNodes();
	var money = ns.getServerMoneyAvailable('home');
	if (money < 1000000000) {
		if (ns.hacknet.numNodes() < 11) {ns.hacknet.purchaseNode()}
		for (var i=0; i < nodes; i++) {
			if (ns.hacknet.getNodeStats(i).level < 200) {ns.hacknet.upgradeLevel(i, 10)}
			if (ns.hacknet.getNodeStats(i).ram < 64) {ns.hacknet.upgradeRam(i, 1)}
			if (ns.hacknet.getNodeStats(i).cores < 10) {ns.hacknet.upgradeCore(i, 1)}
		}
	}
	await ns.sleep("20000");
}


}