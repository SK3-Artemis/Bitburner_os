/** @param {NS} ns */
export async function main(ns) {
/*
ns.disableLog('disableLog');
ns.disableLog('getServerMaxMoney');
ns.disableLog('getServerMinSecurityLevel');
ns.disableLog('getServerSecurityLevel');
ns.disableLog('getServerMoneyAvailable');
ns.disableLog('getServerMinSecurityLevel');
ns.disableLog('getServerBaseSecurityLevel');
ns.disableLog('weaken');
ns.disableLog('grow');
ns.disableLog('hack');
ns.disableLog('getWeakenTime');
ns.disableLog('getGrowTime');
ns.disableLog('getHackTime');
*/
ns.disableLog('ALL');

var target = ns.args[0];
var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
var securityThresh = ns.getServerMinSecurityLevel(target) + 5;

var balken_oben = "╒═════════════════════════════════════════╕";
var balken_unten = "╘═════════════════════════════════════════╛";

while(true) {
	ns.print(balken_oben);
	ns.print("│Security", " min: ", Math.floor(ns.getServerMinSecurityLevel(target)), "  now: ", Math.floor(ns.getServerSecurityLevel(target)), "  max: ", Math.floor(ns.getServerBaseSecurityLevel(target)));
	ns.print("│Money: ", Math.floor(ns.getServerMoneyAvailable(target)/(ns.getServerMaxMoney(target)/100)),"%   (", Math.floor(ns.getServerMoneyAvailable(target)/1000000), "M / ", Math.floor(ns.getServerMaxMoney(target)/1000000), "M");
	if		(ns.getServerSecurityLevel(target) > securityThresh)	{ns.print("│WEAKENING in ", Math.floor(ns.getWeakenTime(target)/1000), "sec ..."); ns.print(balken_unten); await ns.weaken(target)}
	else if (moneyThresh > ns.getServerMoneyAvailable(target)) 		{ns.print("│GROWING in ", Math.floor(ns.getGrowTime(target)/1000), "sec ..."); ns.print(balken_unten); await ns.grow(target)}
	else if	(moneyThresh < ns.getServerMoneyAvailable(target))		{ns.print("│HACKING in ", Math.floor(ns.getHackTime(target)/1000), "sec ..."); ns.print(balken_unten); await ns.hack(target)}
	//ns.print("╘═════════════════════════════════════════╛")
	await ns.sleep(1000)
}

}