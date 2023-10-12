/** @param {NS} ns */
export async function main(ns) {

	let proxy = ns.args[0];
	let target = ns.args[1];
	let tick = ns.args[2];
	let targetobj = ns.getServer(target);
	let player = ns.getPlayer();

	let secmin = 0;
	let secnow = 0;
	let secleft = 0;
	let moneymax = 0;
	let moneynow = 0;
	let moneyleft = 0;
	let weakenamount = 0;
	let growpercent = 0;
	let hackpercent = 0;
	let weakentime = 0;
	let growtime = 0;
	let hacktime = 0;
	let growperthread = 0;
	let hackperthread = 0;
	let maxweakenthreads = 0;
	let maxgrowthreads = 0;
	let maxhackthreads = 0;
	let delay = 0;


for(let i=0;i<999999999;i++){

	moneymax = ns.getServerMaxMoney(target);
	moneynow = (moneymax/100)*75;
	hackpercent = ns.formulas.hacking.hackPercent(targetobj, player);
	hackperthread = moneymax*hackpercent;
	maxhackthreads = moneynow/hackperthread;

	weakentime = ns.formulas.hacking.weakenTime(targetobj, player);
	hacktime   = ns.formulas.hacking.hackTime(targetobj, player);
	delay = weakentime-hacktime;

	ns.exec("hack-only.js", proxy, maxhackthreads, target, delay, i);
	await ns.sleep(tick*4);
}


}