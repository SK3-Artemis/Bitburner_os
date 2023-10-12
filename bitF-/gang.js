/** @param {NS} ns */
export async function main(ns) {

var befehl = ns.args[0];

if(befehl=='status') {
	ns.tprint("In Gang?: ",ns.gang.inGang());
	ns.tprint("Can Recruit?: ", ns.gang.canRecruitMember());
	ns.tprint("Gang Information: ", ns.gang.getGangInformation());
	var info = ns.gang.getGangInformation();
	ns.tprint(info.wantedLevel);
}

else if(befehl=='list') {
	ns.tprint(ns.gang.getMemberNames());
}

else if (befehl=='equip') {
	var order = ns.args[1];
	var who = ns.args[2];
	var members = [];
	if(who=="all"){members = ns.gang.getMemberNames()}else{members.push(who)};

	if(order=='full') {
		var equiplist = ns.gang.getEquipmentNames();
		for(var i=0;i<members.length;i++){
			for(var j=0;j<equiplist.length;j++){
				ns.gang.purchaseEquipment(members[i], equiplist[j]);
			}
		}
	}
	else if(order=='rootkits') {
		var equiplist = ["NUKE Rootkit", "Soulstealer Rootkit", "Demon Rootkit", "Hmap Node", "Jack the Ripper"];
		for(var i=0;i<members.length;i++){
			for(var j=0;j<equiplist.length;j++){
				ns.gang.purchaseEquipment(members[i], equiplist[j]);
			}
		}
	}
	else if(order=='weapons') {
		var equiplist = ["Baseball Bat", "Katana", "Glock 18C", "P90C", "Steyr AUG", "AK-47", "M15A10 Assault Rifle", "AWM Sniper Rifle"];
		for(var i=0;i<members.length;i++){
			for(var j=0;j<equiplist.length;j++){
				ns.gang.purchaseEquipment(members[i], equiplist[j]);
			}
		}
	}
	else if(order=='armor') {
		var equiplist = ["Bulletproof Vest", "Full Body Armor", "Liquid Body Armor", "Graphene Plating Armor"];
		for(var i=0;i<members.length;i++){
			for(var j=0;j<equiplist.length;j++){
				ns.gang.purchaseEquipment(members[i], equiplist[j]);
			}
		}
	}
	else if(order=='vehicles') {
		var equiplist = ["Ford Flex V20", "ATX1070 Superbike", "Mercedes-Benz S9001", "White Ferrari"];
		for(var i=0;i<members.length;i++){
			for(var j=0;j<equiplist.length;j++){
				ns.gang.purchaseEquipment(members[i], equiplist[j]);
			}
		}
	}
	else if(order=='augments') {
		var equiplist = ["Bionic Arms", "Bionic Legs", "Bionic Spine", "BrachiBlades", "Nanofiber Weaves", "Synthetic Heart", "Synfibril Muscle", "BitWire", "Neuralstimulator", "DataJack", "Graphene Bone Lacings"];
		for(var i=0;i<members.length;i++){
			for(var j=0;j<equiplist.length;j++){
				ns.gang.purchaseEquipment(members[i], equiplist[j]);
			}
		}
	}
	else {
		ns.tprint("ERROR Equipment nicht verstanden...")
	}
}

else if(befehl=='order') {
	var order = ns.args[1]
	var who = ns.args[2]
	var members = ns.gang.getMemberNames()

	if(order=="unassign") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "unassigned")
			}
		}
	}
	else if(order=="ascend") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.ascendMember(members[i])
			}
		}
	}
	else if(order=="hack") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Train Hacking")
			}
		}
	}
	else if(order=="char") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Train Charisma")
			}
		}
	}
	else if(order=="combat") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Train Combat")
			}
		}
	}
	else if(order=="ddos") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "DDoS Attacks")
			}
		}
	}
	else if(order=="money") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Money Laundering")
			}
		}
	}
	else if(order=="mug") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Mug People")
			}
		}
	}
	else if(order=="deal") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Deal Drugs")
			}
		}
	}
	else if(order=="rep") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Cyberterrorism")
			}
		}
	}
	else if(order=="humans") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Human Trafficking")
			}
		}
	}
	else if(order=="justice") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Vigilante Justice")
			}
		}
	}
	else if(order=="terror") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Terrorism")
			}
		}
	}
	else if(order=="cyberterror") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Cyberterrorism")
			}
		}
	}
	else if(order=="war") {
		if(who=="all") {
			for(var i=0;i<members.length;i++) {
			ns.gang.setMemberTask(members[i], "Territory Warfare")
			}
		}
	}
	else {
		ns.tprint("ERROR Order nicht verstanden...")
	}
}

else if(befehl=='auto') {
	var members = ns.gang.getMemberNames();

	while(true) {
		for (var i=0; i < members.length; i++) {
			var ascendinfo = ns.gang.getAscensionResult(i);
			if (ascendinfo.str >= 1.025) {
				ns.gang.ascendMember(i);
				ns.tprint("INFO Ascended gang member ", i);
				ns.print("Ascended gang member ", i);
			}
		}
	await ns.sleep(15000);
	}
}

else if(befehl=='test') {
	var members = ns.gang.getMemberNames();
	for(var i=0;i<members.length;i++) {
		ns.tprint(ns.gang.getAscensionResult(members[i]));
	}
}



else {
	ns.tprint("ERROR Befehl nicht verstanden...");
}

}