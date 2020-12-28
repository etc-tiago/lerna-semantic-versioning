const { readdirSync, copyFileSync, readFileSync } = require("fs");

const mainPackage = JSON.parse(
  readFileSync("./lerna.json", { encoding: "utf8" })
);
const listOfPackages = mainPackage.packages.map((pkg) => pkg.replace("/*", ""));

listOfPackages.forEach((package) => {
  readdirSync(`./${package}`).forEach((folder) => {
    copyFileSync("./.npmrc", `./${package}/${folder}/.npmrc`);
  });
});
