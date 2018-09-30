const packageInfo = require(`../package.json`);

module.exports = {
  name: `version`,
  description: `Версия программы.`,
  execute() {
    console.log(`v${packageInfo.version}`);
  }
};
