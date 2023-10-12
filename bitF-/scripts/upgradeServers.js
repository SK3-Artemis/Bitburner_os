/** @param {NS} ns */
export async function main(ns) {
  const servers = ns.getPurchasedServers();
  let ram = 16;
  while (ram < 100_000) {
    for (let ser in servers) {
      while(ns.getServerMoneyAvailable('home') < ns.getPurchasedServerUpgradeCost(servers[ser], ram)){
        await ns.asleep(1000);
      }
      ns.upgradePurchasedServer(servers[ser], ram);
    }
    ram = ram * 2;
  }
}