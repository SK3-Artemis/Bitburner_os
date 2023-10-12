//hacks the server that is given in the argument and runs the moneymaker file. Used only by hack.js
export async function main(ns) {
  //use BruteSSH if required
  if (ns.fileExists("BruteSSH.exe", "home") && ns.getServerNumPortsRequired(ns.args[0]) > 0) {
    ns.brutessh(ns.args[0]);
  }

  //use FTPCrack if required
  if (ns.fileExists("FTPCrack.exe", "home") && ns.getServerNumPortsRequired(ns.args[0]) > 1) {
    ns.ftpcrack(ns.args[0]);
  }

  //use relaySMTP if required
  if (ns.fileExists("relaySMTP.exe", "home") && ns.getServerNumPortsRequired(ns.args[0]) > 2) {
    ns.relaysmtp(ns.args[0]);
  }

  //use httpworm if required
  if (ns.fileExists("httpWorm.exe", "home") && ns.getServerNumPortsRequired(ns.args[0]) > 3) {
    ns.httpworm(ns.args[0]);
  }

  //use sqlinject if required
  if (ns.fileExists("SQLInject.exe", "home") && ns.getServerNumPortsRequired(ns.args[0]) > 4) {
    ns.sqlinject(ns.args[0]);
  }

  //nuke the Target
  ns.nuke(ns.args[0]);

    //Enter the server into hacked.txt
    ns.write("info/hacked.txt", `${ns.args[0]}\r\n`, 'a');
  
  //transfer the Files
  ns.scp(["scripts/growserver.js", 'scripts/hackserver.js', 'scripts/weakenserver.js'], ns.args[0]);
}