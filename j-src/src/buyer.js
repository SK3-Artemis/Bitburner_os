import { fetchServer } from 'network.js'
import { waitForCash,
         clearLSItem,
         setLSItem,
         getNsDataThroughFile as fetch,
         disableLogs,
         announce,
         formatRam,
        } from 'helpers.js'
const argsSchema = [
  ['size', 7],
]

export function autocomplete(data, args) {
  data.flags(argsSchema)
  return data.servers
}

/**
 * @param {NS} ns
 */
export async function main(ns) {
  disableLogs(ns, ['getServerMoneyAvailable', 'sleep'])
  const args = ns.flags(argsSchema)
  let hostname

  const ram = 2**args.size
  const limit = await fetch(ns, `ns.getPurchasedServerLimit()`,
    `/Temp/getPurchasedServerLimit.txt`)
  const cost = await fetch(ns, `ns.getPurchasedServerCost(${ram})`,
    `/Temp/getPurchasedServerCost.${args.size}.txt`)
  ns.tprint(`Buying ${limit} ${ram}GB servers for ${ns.nFormat(cost, "$0.000a")} each`)
  let count = 0

  for (let i = 0; i < limit; i++) {
    hostname = "pserv-" + i
    count += await buyNewOrReplaceServer(ns, hostname, cost, ram)
    await ns.sleep(2000)
  }
  let msg = `Buyer.js is finished, purchased ${count} size ${args.size} servers.`
  announce(ns, msg, 'success')
  ns.tprint("Success: " + msg)
  ns.tprint("I've bought all the servers I can. It's up to you now.")
}

/**
 * @param {NS} ns
 * @param {string} hostname
 * @param {number} cost
 * @param {number} ram
 */
async function buyNewOrReplaceServer(ns, hostname, cost, ram) {
  let host = await fetchServer(ns, hostname)
  if (host === null || host === undefined) {
    ns.print(`Buying a new server ${hostname} with ${ram} GB ram for ` +
      `${ns.nFormat(cost, "$0.000a")}`)
    return purchaseNewServer(ns, hostname, cost, ram)
  }

  if (host.maxRam >= ram) {
    ns.print(`${hostname} is large enough, with ${host.maxRam} GB ram`)
    return 0
  }

  ns.print(`Upgrading ${hostname} with ${host.maxRam} -> ${ram} GB ram` +
    ` for ${ns.nFormat(cost, "$0.000a")}`)
  return await upgradeServer(ns, host, cost, ram)
}

/**
 * @param {NS} ns
 * @param {string} hostname
 * @param {number} cost
 * @param {number} ram
 */
async function purchaseNewServer(ns, hostname, cost, ram) {
  await waitForCash(ns, cost)
  let result = await fetch(ns, `ns.purchaseServer('${hostname}', ${ram})`,
    `/Temp/purchaseServer.txt`)
  if (result) {
    announce(ns, `Purchased new server, ${hostname} with ${formatRam(ram)}`)
    clearLSItem('nmap')
    return 1
  }
  return 0
}

/**
 * @param {NS} ns
 * @param {object} host
 * @param {number} cost
 * @param {number} ram
 */
async function upgradeServer(ns, host, cost, ram) {
  setLSItem('decommissioned', host.name)
  await waitForCash(ns, cost)
  ns.print("Waiting for scripts to end on " + host.name)
  await wrapUpProcesses(ns, host.name)
  await ns.sleep(50)
  ns.print("Destroying server: " + host.name)
  await fetch(ns, `ns.deleteServer('${host.name}')`, '/Temp/deleteServer.txt')
  const result = await fetch(ns, `ns.purchaseServer('${host.name}', ${ram})`,
    '/Temp/purchaseServer.txt')
  clearLSItem('decommissioned')

  if (result) {
    announce(ns, `Upgraded server ${host.name} with ${formatRam(ram)}`)
    clearLSItem('nmap')
    return 1
  }
  return 0
}

/**
 * @param {NS} ns
 * @param {string} hostname
 */
async function wrapUpProcesses(ns, hostname) {
  while ( ns.ps(hostname).length > 0 ) {
    await ns.sleep(200)
  }
}
