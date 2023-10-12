export async function main(ns) {

  const target = ns.args[0];

  const securityThresh = ns.args[1];

  // Infinite loop that continously hacks/grows/weakens the target server
  while (true) {
    let money = ns.getServerMoneyAvailable(target);

    //set our minimal money before hacking.
    //If the servers max money is lower than the threshhold, the max amount will be used instead
    const targetmoney = ns.args[2];
    if (ns.getServerSecurityLevel(target) > securityThresh * 2) {
      // If the server's security level is above our threshold, weaken it
      await ns.weaken(target);
    } else if (money < targetmoney) {
      // If the server's money is less than our threshold, grow it
      await ns.grow(target);
    } else {
      // Otherwise, hack it
      await ns.hack(target);
    }
  }
}