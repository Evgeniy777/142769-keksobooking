module.exports = {
  execute(command) {
    console.log(`Неизвестная команда ${command.red}.`);
    console.log(`Для справки наберите "--help".`);
    process.exit(1);
  }
};
