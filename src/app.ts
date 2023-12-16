import { yarg } from "./config/plugins/args.plugin";
import { serverApp } from "./presentacion/server-app";

// console.log(process.argv);

// console.log(yarg.b);

// funcion anonima autoinvocada asincrona
(async () => {
  await main();
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = yarg;
  console.log(yarg);
  serverApp.run({ base, limit, showTable, fileName, fileDestination });
}
