console.log('global');

function nonGlobal() {
  const console = { log() {} };
  console.log('non-global');
}