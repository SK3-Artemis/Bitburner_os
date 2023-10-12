/** @param {NS} ns */
export async function main(ns) {

var target = ns.args[0];
var delay = ns.args[1];

while(true){
	await ns.hack(target);
	await ns.sleep(100);
}

}