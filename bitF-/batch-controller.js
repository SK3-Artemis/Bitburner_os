/** @param {NS} ns */
export async function main(ns) {

	let proxy = ns.args[0];
	let target = ns.args[1];
	let targetobj = ns.getServer(target);
	let player = ns.getPlayer();
	let ramfree = 0;
	let tick = ns.args[2];

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

	// weaken preparation
	secmin = ns.getServerMinSecurityLevel(target);
	secnow = ns.getServerSecurityLevel(target);
	secleft = secnow-secmin;
	if (secleft>1) {
		weakentime = ns.formulas.hacking.weakenTime(targetobj, player);
		weakenamount = ns.weakenAnalyze(1, 1);
		maxweakenthreads = secleft/weakenamount;
		ns.exec("weaken-only.js", proxy, maxweakenthreads, target);
		ns.tprint("--- preparing: weakening with ", maxweakenthreads, " threads ---");
		await ns.sleep(weakentime);
	} else {
		ns.tprint("--- Target sec is < 1, continuing... ---");
	}

	moneymax = ns.getServerMaxMoney(target);
	moneynow = ns.getServerMoneyAvailable(target);
	growtime = ns.formulas.hacking.growTime(targetobj, player);
	ramfree = ns.getServerMaxRam(proxy) - ns.getServerUsedRam(proxy);
	maxgrowthreads = ramfree/1.75;
	if(moneynow<((moneymax/100)*75)) {
		ns.exec("grow-only.js", proxy, maxgrowthreads, target, 0);
		ns.tprint("--- Target money is < 75%, growing... ---");
		await ns.sleep(growtime);
	}

	
for (let i=0;i<999999;i++) {

	weakentime = ns.formulas.hacking.weakenTime(targetobj, player);
	hacktime   = ns.formulas.hacking.hackTime(targetobj, player);
	growtime   = ns.formulas.hacking.growTime(targetobj, player);

	secmin = ns.getServerMinSecurityLevel(target);
	secnow = secmin+25;
	secleft = secnow-secmin;
	weakenamount = ns.weakenAnalyze(1, 1);
	maxweakenthreads = secleft/weakenamount;
	ns.exec("weaken-only.js", proxy, maxweakenthreads, target, 0, i);
	await ns.sleep(tick);

	moneymax = ns.getServerMaxMoney(target);
	moneynow = (moneymax/100)*25;
	growpercent = ns.formulas.hacking.growPercent(targetobj, 1, player, 1);
	growperthread = (moneynow*growpercent)-moneynow;
	maxgrowthreads = (moneymax-moneynow)/growperthread;
	delay = weakentime-growtime;
	ns.exec("grow-only.js", proxy, maxgrowthreads, target, delay, i);
	await ns.sleep(tick);

	secmin = ns.getServerMinSecurityLevel(target);
	secnow = secmin+50;
	secleft = secnow-secmin;
	weakenamount = ns.weakenAnalyze(1, 1);
	maxweakenthreads = secleft/weakenamount;
	ns.exec("weaken-only.js", proxy, maxweakenthreads, target, 0, i+0.5);
	await ns.sleep(tick);

	moneynow = (moneymax/100)*75;
	hackpercent = ns.formulas.hacking.hackPercent(targetobj, player);
	hackperthread = moneymax*hackpercent;
	maxhackthreads = moneynow/hackperthread;
	delay = weakentime-hacktime;
	ns.exec("hack-only.js", proxy, maxhackthreads, target, delay, i);
	await ns.sleep(tick);

}

}