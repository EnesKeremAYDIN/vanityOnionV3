import { generateV3OnionDomain } from 'onion-tools';

const howMany = 1 //  How many domains to generate
const prefix = "" // Start with a prefix to filter out domains that don't start with it

async function generateDomains() {
  for (let i = 1; i <= howMany; i++) {
    const start = Date.now();
    const { expandedPrivateKey, publicKey, domain } = await generateV3OnionDomain(`${prefix}${i}`);
    const end = Date.now();
    const timeTaken = (end - start) / 1000;
    if (!domain.startsWith(prefix)) {
      i--;
      continue;
    }
    console.log(`Domain ${i}:`); // What domain is the domain generated? 
    console.log(`Private key: ${expandedPrivateKey.toString('base64')}`); // Domain private key
    console.log(`Public key: ${publicKey.toString('base64')}`); // Domain public key
    console.log(`Domain: ${domain}`); // Domain
    console.log(`Time taken: ${timeTaken} seconds\n`); // How long it took to generate the domain
  }
}

generateDomains();
