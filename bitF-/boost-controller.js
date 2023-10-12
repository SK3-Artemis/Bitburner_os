/** @param {NS} ns */
export async function main(ns) {

	let proxy = ns.args[0];
	let tick = ns.args[1];
	let player = ns.getPlayer();
	let targets = ['megacorp', 'blade', 'ecorp', 'nwo', '4sigma', 'b-and-a', 'kuai-gong', 'omnitek', 'clarkinc'];

	let weakentime = 0;
	let growtime = 0;
	let delay = 0;
	let moneymax = 0;
	let moneynow = 0;
	let hackpercent = 0;
	let hackperthread = 0;
	let maxhackthreads = 0;	


for (let i=0;i<999999;i++) {
	for (let j=0;j<targets.length;j++) {

		let target = targets[j];
		let targetobj = ns.getServer(target);
		
		weakentime = ns.formulas.hacking.weakenTime(targetobj, player);
		growtime   = ns.formulas.hacking.growTime(targetobj, player);
		delay = weakentime-growtime;

		ns.exec("weaken-only.js", proxy, 500, target, 0, i);
		ns.exec("grow-only.js", proxy, 2500, target, delay, i);
		ns.exec("weaken-only.js", proxy, 500, target, tick, i+0.5);
	}
	await ns.sleep(tick);
}


}