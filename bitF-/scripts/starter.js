//Startup script after reset
export async function main(ns) {
  ns.rm("info/hacked.txt");
  ns.write("info/hacked.txt", "", "a");
  ns.exec("scripts/survey.js", 'home');
  ns.exec('scripts/breachServer.js', 'home');
  ns.exec('scripts/buyServers.js', 'home');
  ns.exec('scripts/manager.js', 'home');
  ns.rm('info/contracts.js')
  ns.exec('scripts/findContracts.js', 'home')
}