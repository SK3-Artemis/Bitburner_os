//finds all servers and makes entry in serve.txt for further use in scripts and in servers.txt to read by a human
export async function main(ns) {

  //remove old files with outdated data
  ns.rm('info/servers.txt', 'home');
  ns.rm('info/serve.txt', 'home');

  //get all server names
  let serversSeen = ['home']
  for (let i = 0; i < serversSeen.length; i++) {
    const thisScan = ns.scan(serversSeen[i]);
    for (let j = 0; j < thisScan.length; j++) {
      if (serversSeen.indexOf(thisScan[j]) === -1) serversSeen.push(thisScan[j]);
    }
  }

  //make the entry for all servers, Skip the purchased Servers
  for (let i in serversSeen) {
    if (containsServer(serversSeen[i], ns.getPurchasedServers())) {
      //pass
    }
    else {
      ns.write("info/serve.txt", `${serversSeen[i]},${ns.getServerNumPortsRequired(serversSeen[i])},${ns.getServerRequiredHackingLevel(serversSeen[i])}\n`, "a");
      ns.write("info/servers.txt", `Servername: ${serversSeen[i]}\n   RAM: ${ns.getServerMaxRam(serversSeen[i])}\n   Hack-Level Required: ${ns.getServerRequiredHackingLevel(serversSeen[i])}\n   Number of Ports Required: ${ns.getServerNumPortsRequired(serversSeen[i])}\n\n`)
    }
  }
}
function containsServer(object, list) {
  for (let i in list) {
    if (list[i] === object) {
      return true;
    }
  }
  return false;
}