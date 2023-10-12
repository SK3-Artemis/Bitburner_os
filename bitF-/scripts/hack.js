/** @param {NS} ns */
export async function main(ns) {
  let threads = Math.ceil(ns.hackAnalyzeThreads(ns.args[0], ns.getServerMoneyAvailable(ns.args[0])*0.7)) ;
  if(threads < 1) threads = 1;
   //find all available Ram
  ns.clearPort(1);
  ns.exec('scripts/findAvailableRam.js', 'home');
  await ns.asleep(50);
  let available = ns.readPort(1).split(':');
  available.pop();
  for(let i in available){
    available[i] = available[i].split(',');
  }
  //The Goal is to get 10% of the servers max money
  //Create as many hackthreads as needed. If not enough threads can be created, they will be created later
  for (let j in available) {
    if (available[j][1] >= threads) {
      ns.exec('scripts/hackServer.js', available[j][0], threads, ns.args[0]);
      break;
    }
    else {
      ns.exec('scripts/hackServer.js', available[j][0], available[j][1], ns.args[0]);
      threads =  threads - available[j][1]
    }
  }
}