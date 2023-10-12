/** @param {NS} ns */
export async function main(ns) {
  
  let threads = Math.ceil(ns.growthAnalyze(ns.args[0], ns.getServerMaxMoney(ns.args[0]) / ns.getServerMoneyAvailable(ns.args[0]), ns.getServer(ns.getHostname()).cpuCores));

  //find all available Ram
  ns.clearPort(1);
  ns.exec('scripts/findAvailableRam.js', 'home');
  await ns.asleep(50);
  let available = ns.readPort(1).split(':');
  available.pop();
  for(let i in available){
    available[i] = available[i].split(',');
  }
  
  //Create as many weakenthreads as needed. If not enough threads can be created, they will be created later
  for (let j in available) {
    if (available[j][1] >= threads) {
      ns.exec('scripts/growServer.js', available[j][0], threads, ns.args[0]);
      break;
    }
    else {
      ns.exec('scripts/growServer.js', available[j][0], available[j][1], ns.args[0]);
      threads =  threads - available[j][1]
    }
  }
}