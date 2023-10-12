/** @param {NS} ns */
export async function main(ns) {

  //prepare the data from serve.txt to be usable. This presumes that the data in serve.txt is correct.
  let servers = ns.read("info/serve.txt").split("\n");
  servers.pop();

  for (let i in servers) {
    servers[i] = servers[i].split(",");
    servers[i][1] = Number(servers[i][1]);
    servers[i][2] = Number(servers[i][2]);
  }

  while (true) {
    //Set the number of Ports that can be opened
    let ports = 0;
    if (ns.fileExists("BruteSSH.exe", "home")) {
      ports = 1;
    }
    if (ns.fileExists("FTPCrack.exe", "home")) {
      ports = 2;
    }
    if (ns.fileExists("relaySMTP.exe", "home")) {
      ports = 3;
    }
    if (ns.fileExists("HTTPWorm.exe", "home")) {
      ports = 4;
    }
    if (ns.fileExists("SQLInject.exe", "home")) {
      ports = 5;
    }
    //Determine if a server can be hacked
    for(let j in servers){
      let hacked = ns.read('info/hacked.txt').split('\r\n');
      if (findServer(servers[j][0], hacked)) {
        //pass
      }
      else {
        if (servers[j][1] > ports || servers[j][2] > ns.getHackingLevel()) {
          //pass
        }
        else {
          ns.exec('scripts/breakIntoServer.js', 'home', 1, servers[j][0]);
        }
      }
    }
    //ending the loop
    await ns.asleep(5000);
  }
}

function findServer(element, list) {
  for (let i in list) {
    if (list[i] === element) {
      return true;
    }
  }
  return false;
}