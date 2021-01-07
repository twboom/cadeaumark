function runFunction() {

  let args = input.value.slice(0).trim().split(/ +/g);
  let command = args.shift().toLowerCase();

  if (loginState == false && command !== 'login' && command !== 'logout' && command !== 'help') {
    newCommandLine("You aren't logged in.")
    newCommandLine('login <username> <password>')
    return
  }


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

    case 'find':
      find();
      break

    case 'clue':
      clue();
      break

    default:
      newCmdNotFoundLine('Markinal:' + ' ' + 'Command not found' + ' ' + input.value);
  }
}
