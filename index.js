import bcrypt from "bcrypt";
const passwort = "super-duper-döner-passwort"
// datenbank
const saltRound = 10;
const salt = await bcrypt.genSalt(saltRound);
const hash = await bcrypt.hash(passwort, salt);
console.log(hash);
// entschlüsseln
const match = await bcrypt.compare(passwort, hash);
// console.log(match);
console.log(
    await bcrypt.compare(passwort, "$2b$10$AMz2eJnBCeS1toA19XlDX.6tdU7JOwm5F4PW6CT20VaJURZl45aSS")
);