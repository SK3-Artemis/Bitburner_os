/** Get all Servers for which currently a script is running and Generating Money for 
 * 
 * 
*/
export async function main(ns) {
  let servers = [];

  //Scripts on homeserver
  const homeScripts = ns.ps('home');
  for (let i in homeScripts) {
    if (homeScripts[i].filename === 'scripts/growServer.js' ||
      homeScripts[i].filename === 'scripts/weakenServer.js' || 
       homeScripts[i].filename === 'scripts/hackServer.js') {
      insertServer(homeScripts[i].args[0], servers);
    }
  }

  //get Scripts on purchased Servers
  const purchasedServers = ns.getPurchasedServers();
  for (let x in purchasedServers) {
    const purchasedServerScripts = ns.ps(purchasedServers[x]);
    for (let i in purchasedServerScripts) {
      insertServer(purchasedServerScripts[i].args[0], servers);
    }
  }

  //get Scripts from hacked Servers
  const hackedServers = ns.read("info/hacked.txt").split("\r\n")
  hackedServers.pop();
  for (let i in hackedServers) {
    const hackedServerScripts = ns.ps(hackedServers[i]);
    for (let j in hackedServerScripts) {
      insertServer(hackedServerScripts[j].args[0], servers)
    }
  }

  //put an output string on a port to be read by the manager file
  let output = '';
  for (let i in servers) {
    output += `${servers[i]},`
  }
  ns.writePort(2, output);
}

//function that only inserts the server into the list, if the server is not in the list yet
function insertServer(server, list) {
  if (list.indexOf(server) === -1) {
    list.push(server)
  }
}