function runFunction() {
  switch (input.value) {

    // ping command
    case 'ping':
      ping();
      break;

    // help command
    case 'help':
      help();
      break;

    // login command
    case 'login':
      login()
      break

    default:
      newCmdNotFoundLine('Markinal:' + ' ' + 'Command not found' + ' ' + input.value);
  }
}
