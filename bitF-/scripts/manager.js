//Manager Script that controls income generation
export async function main(ns) {

  while (true) {
    //get all Servers for which no Script is currently running and sort by most Profitable
    let servers = ns.read('info/hacked.txt').split('\r\n');
    servers.pop();
    ns.clearPort(2)
    ns.exec('scripts/runningScripts.js', 'home');
    await ns.asleep(30);
    let alreadyRunning = ns.readPort(2).split(',');
    alreadyRunning.pop();
    servers = serverFilter(servers, alreadyRunning);
    servers.sort(function (a, b) { return (ns.getServerMaxMoney(b) - ns.getServerMaxMoney(a)) });
    if (servers[0]) {
      const minSecurityLevel = ns.getServerMinSecurityLevel(servers[0]);
      const securityLevel = ns.getServerSecurityLevel(servers[0]);
      const moneyAvailable = ns.getServerMoneyAvailable(servers[0]);
      const maxMoney = ns.getServerMaxMoney(servers[0]);
      if (securityLevel > minSecurityLevel) {

        ns.exec('scripts/weaken.js', 'home', 1, servers[0]);
        await ns.asleep(100);
      }
      else if (moneyAvailable < maxMoney) {
        ns.exec('scripts/grow.js', 'home', 1, servers[0]);
        await ns.asleep(100);
      }
      else {
        ns.exec('scripts/hack.js', 'home', 1, servers[0]);
        await ns.asleep(100);
      }
    }
    //end of the loop
    await ns.asleep(1000);
  }
}

//Filters all used servers out
function serverFilter(list, filter) {
  let filtered = []


  for (let i in list) {
    let isInFilter = true;
    for (let j in filter) {
      if (list[i] === filter[j]) {
        isInFilter = false;
      }
    }
    if (isInFilter === true) {
      filtered.push(list[i])
    }
  }
  return filtered;
}