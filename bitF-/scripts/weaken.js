/** @param {NS} ns */
export async function main(ns) {

  let threads = 1;
  
  //Determine how many threads are needed
  while(ns.weakenAnalyze(threads, ns.getServer(ns.getHostname()).cpuCores) < ns.getServerSecurityLevel(ns.args[0]) - ns.getServerMinSecurityLevel(ns.args[0])){
    threads++;
  }
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
      ns.exec('scripts/weakenServer.js', available[j][0], threads, ns.args[0]);
      break;
    }
    else {
      ns.exec('scripts/weakenServer.js', available[j][0], available[j][1], ns.args[0]);
      threads =  threads - available[j][1]
    }
  }
}