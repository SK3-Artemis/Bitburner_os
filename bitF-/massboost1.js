/** @param {NS} ns */
export async function main(ns) {


var target = ns.args[0];
var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
var securityThresh = ns.getServerMinSecurityLevel(target) + 5;

while(true) {
if (moneyThresh > ns.getServerMoneyAvailable(target)) {await ns.grow(target)} else {}
if (ns.getServerSecurityLevel(target) > securityThresh) {await ns.weaken(target)} else {}
await ns.sleep(1000);
}


}