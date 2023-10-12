// Finds all Servers that can run scripts 
export async function main(ns) {
  let servers = [];

  //get available RAM from home. Only 70% of the homeRAM is allowed to be used by the Manager, because other scripts need to run there as well
  const homeScripts = ns.ps('home');
  let usedRam = 0;
  for (let i in homeScripts) {
    if (homeScripts[i].filename === 'scripts/growserver.js' || homeScripts[i].filename === 'scripts/weakenserver.js') {
      usedRam += 1.75 * homeScripts[i].threads;
    }
    else if (homeScripts[i].filename === 'scripts/hackserver.js') {
      usedRam += 1.7 * homeScripts[i].threads;
    }
  }
  const homeRam = ns.getServerMaxRam('home') *0.7 - usedRam
  if (homeRam > 1.75) {
    servers.push(['home', Math.floor(homeRam/1.75)]);
  }

  //get available RAM from Purchased Servers
  const purchasedServers = ns.getPurchasedServers();
  for (let x in purchasedServers) {
    const availableRam = ns.getServerMaxRam(purchasedServers[x]) - ns.getServerUsedRam(purchasedServers[x]);
    if (availableRam > 1.75) servers.push([purchasedServers[x], Math.floor(availableRam/1.75)]);
  }

  //get available RAM from hacked Servers
  const hackedServers = ns.read("info/hacked.txt").split("\r\n")
  hackedServers.pop();
  for (let i in hackedServers) {
    const availableRam = ns.getServerMaxRam(hackedServers[i]) - ns.getServerUsedRam(hackedServers[i]);
    if (availableRam > 1.75) servers.push([hackedServers[i], Math.floor(availableRam/1.75)]);
  }

  //put an output string on a port to be read by the manager file
  let output = '';
  for (let i in servers) {
    output += `${servers[i][0]},${servers[i][1]}:`
  }
  ns.writePort(1, output);
}