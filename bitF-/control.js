/** @param {NS} ns */
export async function main(ns) {

let befehl = ns.args[0];

if(befehl=="hack"){
	let proxy = ns.args[1];
	let target = ns.args[2];
	let threads = ns.args[3];
	let maxthreads = 0;
	if(threads=="max"){maxthreads = (ns.getServerMaxRam(proxy)-ns.getServerUsedRam(proxy)) /1.7}
	else{maxthreads = threads};
	ns.scp("hack-only.js", proxy);
	ns.exec("hack-only.js", proxy, maxthreads, target);
}

else if(befehl=="grow"){
	let target = ns.args[1];
	let threads = ns.args[2];
	if(threads=='max'){threads=(ns.getServerMaxRam("home")-ns.getServerUsedRam("home"))/1.75}
	ns.exec("grow-only.js", "home", threads, target);
}

else if(befehl=="weaken"){
	let target = ns.args[1];
	let threads = ns.args[2];
	ns.exec("weaken-only.js", "home", threads, target);
}


else if(befehl=="batchvirus"){

	let proxy = ns.args[1];
	let target = ns.args[2];
	let tick = ns.args[3];

	ns.scp("hack-only.js", proxy);
	ns.scp("grow-only.js", proxy);
	ns.scp("weaken-only.js", proxy);
	ns.scp("weakenamount.js", proxy);
	ns.scp("batch-controller.js", proxy);
	ns.exec("batch-controller.js", proxy, 1, proxy, target, tick);
}

else if(befehl=="smallvirus"){

	let proxy = ns.args[1];
	let target = ns.args[2];
	let threads = (ns.getServerMaxRam(proxy) - ns.getServerUsedRam(proxy)) /2.4 ;

	ns.scp("virus.js", proxy);
	ns.exec("virus.js", proxy, threads, target);
}

else if(befehl=="batchvirus2"){

	let proxygrow = ns.args[1];
	let proxyhack = ns.args[2];
	let proxyweakengrow = ns.args[3];
	let proxyweakenhack = ns.args[4];
	let target = ns.args[5];
	let tick = ns.args[6];

	ns.scp("grow-only.js", proxygrow);
	ns.scp("hack-only.js", proxyhack);
	ns.scp("weaken-only.js", proxyweakengrow);
	ns.scp("weaken-only.js", proxyweakenhack);

	ns.scp("weakenamount.js", proxyweakengrow);
	ns.scp("weakenamount.js", proxyweakenhack);

	ns.scp("hack-controller.js", proxyhack);
	ns.scp("grow-controller.js", proxygrow);
	ns.scp("weakengrow-controller.js", proxyweakengrow);
	ns.scp("weakenhack-controller.js", proxyweakenhack);

	ns.exec("grow-controller.js", proxygrow, 1, proxygrow, target, tick); await ns.sleep(tick);
	ns.exec("weakengrow-controller.js", proxyweakengrow, 1, proxyweakengrow, target, tick); await ns.sleep(tick);
	ns.exec("hack-controller.js", proxyhack, 1, proxyhack, target, tick); await ns.sleep(tick);
	ns.exec("weakenhack-controller.js", proxyweakenhack, 1, proxyweakenhack, target, tick); await ns.sleep(tick);

}

else if(befehl=="boost"){

	let proxy = ns.args[1];
	let tick = ns.args[2];

	ns.scp("grow-only.js", proxy);
	ns.scp("weaken-only.js", proxy);
	ns.scp("weakenamount.js", proxy);
	ns.scp("boost-controller.js", proxy);
	ns.exec("boost-controller.js", proxy, 1, proxy, tick);

}

else if(befehl=="letsroll"){
	var tick = ns.args[1];

	ns.exec("control.js", "home", 1, "batchvirus", "p0", "ecorp", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p1", "megacorp", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p2", "blade", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p3", "kuai-gong", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p4", "clarkinc", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p5", "nwo", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p6", "4sigma", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p7", "omnitek", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p8", "b-and-a", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p9", "global-pharm", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p10", "zeus-med", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p11", "fulcrumtech", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p12", "deltaone", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p13", "nova-med", tick);	await ns.sleep(150);
	ns.exec("control.js", "home", 1, "batchvirus", "p14", "univ-energy", tick);
}


}