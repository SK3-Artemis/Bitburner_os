/** @param {NS} ns */
export async function main(ns) {
	const [id, desc, type, duration, port = null] = ns.args;

	// Fake a hack/grow/weaken job
	const start = performance.now();
	await ns.sleep(duration);
	const end = performance.now();

	// Report back to the manager
	if (port != null)
		await ns.writePort(port, JSON.stringify({ id: id, desc: desc, type: type, start: start, end: end }));
}