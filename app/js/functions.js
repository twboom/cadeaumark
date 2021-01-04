function runFunction() {

  let args = input.value.slice(0).trim().split(/ +/g);
  let command = args.shift().toLowerCase();

  switch (command) {

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
      login();
      break;


    // logout command
    case 'logout':
      logout();
      break

    default:
      newCmdNotFoundLine('Markinal:' + ' ' + 'Command not found' + ' ' + input.value);
  }
}
