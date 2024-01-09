/*







    __    _ __  __
   / /_  (_) /_/ /_  __  ___________  ___  _____     _   ____  _____
  / __ \/ / __/ __ \/ / / / ___/ __ \/ _ \/ ___/____| | / / / / / _ \
 / /_/ / / /_/ /_/ / /_/ / /  / / / /  __/ /  /_____/ |/ / /_/ /  __/
/_.___/_/\__/_.___/\__,_/_/  /_/ /_/\___/_/         |___/\__,_/\___/




*/ /**
 * CONFIGURATION
 * --------------------------------------
 */

/**
 * `bitburner-vue` installs to a unique subdirectory by default. To place it somewhere other than
 * your root directory in BitBurner, set the prefixDirectory config as needed. Do not use a
 * relative path such as './myDirectory' - always use absolute paths like '/myDirectory'
 */
let prefixDirectory = ''

/**
 * --------------------------------------
 * DO NOT EDIT BELOW THIS LINE













*/

let requiredHost = 'home'
let repoRoot = 'https://raw.githubusercontent.com/smolgumball/bitburner-vue/main'
let manifestFile = 'installManifest.txt'
let manifestTmpPath = '/tmp/installManifest__bitburner-vue.txt'

export async function main(ns) {
  if (ns.getHostname() !== requiredHost) {
    throw new Error('Run this script from home')
  }

  let manifestPath = joinPaths(repoRoot, manifestFile)
  let manifestData = await fetchConfig(ns, manifestPath)
  let manifestLength = manifestData.manifestPaths.length

  if (prefixDirectory) prefixDirectory = `/${trimPath(prefixDirectory)}/`

  for (let i in manifestData.manifestPaths) {
    let { repoPath, installPath } = manifestData.manifestPaths[i]
    repoPath = joinPaths(repoRoot, repoPath)
    try {
      installPath = joinPaths(prefixDirectory, installPath)
      await getFileFromGH(ns, repoPath, installPath)
      await ns.sleep(100)
      await rewriteImports(ns, installPath, manifestData.importRoot, prefixDirectory)
      ns.tprint(`Installed: ${installPath} [${Number(i) + 1}/${manifestLength}]`)
    } catch (e) {
      ns.tprint(`ERROR: Exception while downloading ${repoPath}: `, e.message)
      throw e
    }
  }

  ns.rm(manifestTmpPath, requiredHost)
  let mainJsPath = joinPaths(prefixDirectory, manifestData.entryFile)

  // prettier-ignore
  ns.tprint(`Install complete! 🎉

Run the following in your home terminal to launch bitburner-vue:

run ${mainJsPath}

`)
}

async function rewriteImports(ns, filePath, importRoot, prefixDirectory) {
  let file = ns.read(filePath)
  file = file.replaceAll(`from '${importRoot}`, `from '${joinPaths(prefixDirectory, importRoot)}`)
  file = file.replaceAll(`from "${importRoot}`, `from "${joinPaths(prefixDirectory, importRoot)}`)
  file = file.replaceAll(`from \`${importRoot}`, `from \`${joinPaths(prefixDirectory, importRoot)}`)
  await ns.write(filePath, file, 'w')
}

async function fetchConfig(ns, manifestPath) {
  try {
    await getFileFromGH(ns, manifestPath, manifestTmpPath)
    return JSON.parse(ns.read(manifestTmpPath))
  } catch (e) {
    ns.tprint(`ERROR: Downloading and reading config file failed ${manifestPath}`)
    throw e
  }
}

async function getFileFromGH(ns, repoPath, installPath) {
  await githubReq(ns, repoPath, installPath)
}

async function githubReq(ns, repoPath, installPath) {
  if (isScriptFile(installPath)) {
    ns.print('Cleanup on: ' + installPath)
    await ns.scriptKill(installPath, requiredHost)
    await ns.rm(installPath, requiredHost)
  }

  ns.print('Request to: ' + repoPath)
  await ns.sleep(100)
  await ns.wget(repoPath, installPath, requiredHost)
}

// Path helpers
// ---

function joinPaths(pathA, pathB) {
  return `${trimTrailingSlash(pathA)}/${trimLeadingSlash(pathB)}`
}

function trimPath(path) {
  return `${trimTrailingSlash(trimLeadingSlash(path))}`
}

function trimLeadingSlash(path) {
  if (path && path.startsWith('/')) {
    return path.slice(1)
  }
  return path
}

function trimTrailingSlash(path) {
  if (path && path.endsWith('/')) {
    return path.slice(0, -1)
  }
  return path
}

// Reflection helpers
// ---

function isScriptFile(path) {
  return path.endsWith('ns') || path.endsWith('js')
}

// Installer script forked from:
// https://github.com/lethern/Bitburner_git_fetch


//-------------------------------------------------------------------------------------------------------


// That's the code that was in the original os-install script

//let gitUsername = 'lethern';
//let repoName = 'Bitburner_os';
//let branchName = 'main';
//let json_filename = 'install_files_json.txt';

/** @param {NS} ns */
//export async function main(ns) {
//	let filesToDownload = await init(ns);

//	await downloadFiles(ns, filesToDownload);

//	terminalCommand('alias -g bootOS="run /os/main.js"')

//	ns.tprintf("Install complete! To start, type: bootOS")
//}

//async function init(ns){
//	if(ns.args[0] == 'dev'){
//		branchName = 'lethern-dev';
//		ns.tprint("Dev branch");
//	}else if(ns.args.length > 0){
//		throw 'Invalid argument(s), expected "dev"';
//	}
	
//	let { welcomeLabel, filesToDownload } = await fetchConfig(ns)

//	ns.tprintf("%s", welcomeLabel)

//	if (ns.getHostname() !== 'home') {
//		throw 'Run the script from home'
//	}

//	await clean(ns, filesToDownload);

//	return filesToDownload;
//}

//async function downloadFiles(ns, filesToDownload){
//	let count = 0;
//	for (let filename of filesToDownload) {
//		const path = getBaseUrl() + filename
//		const save_filename = (!filename.startsWith('/') && filename.includes('/')) ? '/' + filename : filename;

//		try {
//			await ns.scriptKill(save_filename, 'home')
//			await ns.rm(save_filename)
//			await ns.sleep(20)
//			ns.print('wget '+path+' -> '+save_filename);
//			await ns.wget(path + '?ts=' + new Date().getTime(), save_filename)

//			if (++count % 5 == 0) {
//				ns.tprintf(`Installing... [${(count + '').padStart(2)}/${filesToDownload.length}]`);
//			}
//		} catch (e) {
//			ns.tprint(`ERROR (tried to download  ${path})`)
//			throw e;
//		}
//	}
//}

//function getBaseUrl(){
//	return `https://raw.githubusercontent.com/${gitUsername}/${repoName}/${branchName}/`;
//}

//async function clean(ns, filesToDownload) {
//	let filesRaw = filesToDownload.map(file => file.substr(file.lastIndexOf('/') + 1))
//	let allFiles = ns.ls("home");
//	let toDelete = [];
//	allFiles.forEach(_file => {
//		let file = (_file.startsWith('/')) ? _file.substr(1) : _file;

//		if (file.startsWith('os/')) {
//			let file_raw = file.substr(file.lastIndexOf('/') + 1);
//			if (filesRaw.includes(file_raw)) {
//				if (!filesToDownload.includes(file)) {
//					toDelete.push(_file);
//				}
//			} else {
//				console.log("Install-clean: unidentified file", file);
//			}
//		}
//	})

//	if (toDelete.length) {
//		if (await ns.prompt("Files have moved. Installer will clean old files. Confirm? [recommended] " + toDelete.join(", "))) {
//			toDelete.forEach(file => ns.rm(file));
//		}
//	}
//}

//async function fetchConfig(ns) {
//	try {
//		let save_filename = '/os/' + json_filename;
//		await ns.rm(save_filename)

//		let path = getBaseUrl() + json_filename;
//		ns.print('wget '+path+' -> '+save_filename);
//		await ns.wget(path + '?ts=' + new Date().getTime(), save_filename)
//		return JSON.parse(ns.read(save_filename));
//	} catch (e) {
//		ns.tprint(`ERROR: Downloading and reading config file failed ${json_filename}`);
//		throw e;
//	}
//}

//function terminalCommand(message) {
//	const docs = globalThis['document']
//	const terminalInput = /** @type {HTMLInputElement} */ (docs.getElementById("terminal-input"));
//	terminalInput.value = message;
//	const handler = Object.keys(terminalInput)[1];
//	terminalInput[handler].onChange({ target: terminalInput });
//	terminalInput[handler].onKeyDown({ key: 'Enter', preventDefault: () => null });
//}
