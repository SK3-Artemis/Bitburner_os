/** @param {NS} ns */
export async function main(ns) {

function Formatmoney(input) {
	let scale = "";
	let output = "";
	if(input<1000000000){scale="M"; output=Math.floor(input/1000000)+scale}
	else if(input<1000000000000){scale="B"; output=Math.floor(input/1000000000)+scale};
	return output;
}

let target = ns.args[0];
let targetobject = ns.getServer(target);
let player = ns.getPlayer();

let weakentime = ns.formulas.hacking.weakenTime(targetobject, player);
let weakenamount = ns.weakenAnalyze(1, 1);
let hacktime = ns.formulas.hacking.hackTime(targetobject, player);
let growtime = ns.formulas.hacking.growTime(targetobject, player);
let hackpercent = ns.formulas.hacking.hackPercent(targetobject, player);
let growpercent = ns.formulas.hacking.growPercent(targetobject, 1, player, 1);

let moneymax = ns.getServerMaxMoney(target);
let moneynow = ns.getServerMoneyAvailable(target);
let secmin = ns.getServerMinSecurityLevel(target);
let secnow = ns.getServerSecurityLevel(target);

//ns.hackAnalyzeSecurity

let moneypercent = Math.round(moneynow / (moneymax / 100));
let maxhackthreads = (100/hackpercent);
let growfactor = (moneymax/moneynow); //um soviel % muss Money steigen für MAX
let maxgrowthreads = growfactor/growpercent;

ns.tprint(" ------------------- ",target," --------------------");
ns.tprint("| Money : ", moneypercent, "% | ", Formatmoney(moneynow), " / ", Formatmoney(moneymax), "    : ", moneynow);
ns.tprint("| Security: ", secmin, " / ", Math.floor(secnow));
ns.tprint("| Weaken Time : ", weakentime);
ns.tprint("| Hack Time : ", hacktime);
ns.tprint("| Hack % : ", hackpercent);
ns.tprint("| Grow Time : ", growtime);
ns.tprint("| Grow % : ", growpercent);
ns.tprint(" --------------------------------------------");

ns.tprint("threads to hack MAX : ", Math.floor(maxhackthreads));
ns.tprint("threads to grow to MAX : ", Math.floor(maxgrowthreads));

ns.tprint(growfactor);

}