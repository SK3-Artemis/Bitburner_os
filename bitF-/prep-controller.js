/** @param {NS} ns */
export async function main(ns) {

	let proxy = ns.args[0];
	let target = ns.args[1];
	let tick = ns.args[2];
	let targetobj = ns.getServer(target);
	let player = ns.getPlayer();

	let secmin = getServerMinSecurityLevel(target);
	let secnow = getServerSecurityLevel(target);
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

	if (secnow>secmin) {
		ns.tprint("--- Server ", target, " Security is not at minimum, weakening with max threads...");
		maxweakenthreads = (ns.getServerMaxRam()/1.75)-10;
		ns.exec("weaken-only.js", proxy, maxweakenthreads, target, 0);
	}
	if ()
	maxweakenthreads = (ns.getServerMaxRam()/100)*99;
	ns.exec("weaken-only.js", proxy, maxweakenthreads, target, 0);

	weakentime = ns.formulas.hacking.weakenTime(targetobj, player);
	await ns.sleep(weakentime);

for(let i=0;i<999999999;i++){

	moneymax = ns.getServerMaxMoney(target);
	moneynow = (moneymax/100)*25;
	growpercent = ns.formulas.hacking.growPercent(targetobj, 1, player, 1);
	growperthread = (moneynow*growpercent)-moneynow;
	maxgrowthreads = (moneymax-moneynow)/growperthread+100;

	secnow = (maxgrowthreads*0.004)+10;
	weakenamount = ns.weakenAnalyze(1, 1);
	maxweakenthreads = secnow/weakenamount;

	ns.exec("weaken-only.js", proxy, maxweakenthreads, target, 0, i);
	await ns.sleep(tick*4);
}


}