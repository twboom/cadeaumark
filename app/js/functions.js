function runFunction() {
  switch (input.value) {

    // ping command
    case 'ping':
      ping();
      break;

    // help help command
    case 'help':
      help();
      break;

    default:
      newCmdNotFoundLine('ran:' + ' ' + 'Command not found' + ' ' + input.value);
  }
}
