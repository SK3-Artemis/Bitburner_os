export async function main(ns) {
    const purchasedServers = ns.getPurchasedServers();
    for(let i in purchasedServers){
      ns.scp(['scripts/hackServer.js', 'scripts/growServer.js', 'scripts/weakenServer.js'], purchasedServers[i], 'home');
    }
}
