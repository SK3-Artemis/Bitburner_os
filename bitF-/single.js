/** @param {NS} ns */
export async function main(ns) {

ns.tprint(ns.singularity.getCrimeChance('homicide'));
if (ns.singularity.getCrimeChance('homicide') < 0.75) {
	ns.singularity.commitCrime('mug', false);
} else {
	ns.singularity.commitCrime('homicide', false);
}

}