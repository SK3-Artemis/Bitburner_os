/** @param {NS} ns */
export async function main(ns) {
  const servernames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const alreadynamed = ns.getPurchasedServers();
  for (let i = 0; i < ns.getPurchasedServerLimit(); i++) {
    while (ns.getPurchasedServerCost(8) > ns.getServerMoneyAvailable("home")) {
      await ns.asleep(1000);
    }
    if (containsServer(servernames[i], alreadynamed)) {
      //pass
    }
    else{
      ns.purchaseServer(servernames[i], 8);
      ns.scp(['scripts/hackServer.js', 'scripts/growServer.js', 'scripts/weakenServer.js'], servernames[i], 'home');     
    }
  }
  ns.exec('scripts/upgradeServers.js', 'home');
}

function containsServer(object, list){
  for(let i in list){
    if(list[i] === object)return true;
  }
  return false;
}