export async function main(ns) {

  while (true) {
    //gets all hacked servers
    const hackedServers = ns.read("info/hacked.txt").split("\r\n");
    hackedServers.pop()

    //use either grow or weaken if Securitylevel is too high
    for (let i in hackedServers) {
      if (ns.getServerSecurityLevel(hackedServers[1]) > 3 * ns.getServerMinSecurityLevel(hackedServers[1])) {
        ns.exec("scripts/weakenserver.js", ns.args[0],
          Math.floor((ns.getServerMaxRam(ns.args[0]) - ns.getServerUsedRam(ns.args[0])) / 1.75), hackedServers[i]);

        while (ns.ps(ns.args[0]).length > 1) {
          await ns.asleep(1000);
        }
      }
      else {

        try {
          ns.exec("scripts/growserver.js", ns.args[0],
            Math.floor((ns.getServerMaxRam(ns.args[0]) - ns.getServerUsedRam(ns.args[0])) / 1.75), hackedServers[i]);
        }
        catch {
          ns.tprint('executing function failed!')
        }
        finally {
          //Wait for the Script to finish before starting a new one
          while (ns.ps(ns.args[0]).length > 1) {
            await ns.asleep(1000);
          }
        }
      }
    }
  }
}