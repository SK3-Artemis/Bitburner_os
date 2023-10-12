//use the purchased Servers to farm Hacking XP
export async function main(ns) {
  const purchasedServers = ns.getPurchasedServers();
  while(true){
    for(let i in purchasedServers){
      let threads = Math.floor((ns.getServerMaxRam(purchasedServers[i]) - ns.getServerUsedRam(purchasedServers[i]))/1.75);
      if(threads > 0){
        ns.exec('scripts/weakenServer.js', purchasedServers[i], threads, 'fulcrumassets');
      }
    }
    await ns.asleep(1000);
  }
}