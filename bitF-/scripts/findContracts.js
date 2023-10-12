//Find all Contracts on servers and write them into info/contracts.txt
export async function main(ns) {
  while (true) {
    let foundContracts = ns.read('info/contracts.txt').split('\n');
    foundContracts.pop();
    for (let i in foundContracts) {
      foundContracts[i] = foundContracts[i].split(',')
    }
    let servers = ns.read('info/serve.txt').split('\n')
    servers.pop();
    for (let i in servers) {
      servers[i] = servers[i].split(',');
      let contracts = ns.ls(servers[i][0], '.cct');
      for (let j in contracts) {
        if(findContract(contracts[j], foundContracts)){
          //pass
        }
        else{
          ns.write('info/contracts.txt', `${servers[i][0]},${contracts[j]}\n`)
        }
      }
    }
   
    await ns.asleep(1000)
  }
}

function findContract(element, list) {
  for (let i in list) {
    if (list[i][1] === element) {
      return true;
    }
  }
  return false;
}