/** @param {NS} ns */
export async function main(ns) {

var target = ns.args[0];
var delay = ns.args[1];

while(true){
	var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
	var securityThresh = ns.getServerMinSecurityLevel(target) + 5;
	if(moneyThresh < ns.getServerMoneyAvailable(target) && securityThresh > ns.getServerSecurityLevel(target)) {
		await ns.hack(target);
	}
	await ns.sleep(10000);
}

}