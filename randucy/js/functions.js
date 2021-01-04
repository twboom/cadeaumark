function runFunction() {
  switch (input.value) {
    case 'ping':
      ping();
      break;
    default:
      console.log('No function found');
  }
}
