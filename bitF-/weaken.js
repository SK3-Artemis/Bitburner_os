/** @param {NS} ns */
export async function main(ns) {

var target = ns.args[0];
var delay = ns.args[1];

while(true){
	await ns.weaken(target);
	await ns.sleep(10);
}

}