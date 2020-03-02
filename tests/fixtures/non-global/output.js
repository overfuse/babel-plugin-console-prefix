console.log("Bonify rocks" + "global");

function nonGlobal() {
  const console = {
    log() {}
  };
  console.log("non-global");
}