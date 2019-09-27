// https://www.sitespeed.io/documentation/sitespeed.io/scripting/#run

module.exports = async function(context, commands) {
  await commands.navigate(
    'https://kite-dev-it-vn.hito-link.jp/#/login'
  );

  try {
    await commands.addText.byClassName('ppt', 'js-tenant-module input input-middle');
    await commands.addText.byClassName('tu.le@persol.co.jp', 'js-email-module input input-middle');
    await commands.addText.byClassName('123456', 'js-password-module input input-middle');
    // Click on the submit button with id wpLoginAttempt
    await commands.click.byClassName('btn btn-ghost');
    // wait on a specific id to appear on the page after you logged in
    return commands.wait.byTime(10000);
  } catch (e) {
    // We try/catch so we will catch if the the input fields can't be found
    // The error is automatically logged in Browsertime and re-thrown here
    // We could have an alternative flow ...
    // else we can just let it cascade since it catched later on and reported in
    // the HTML
    // commands.error('Error!!!');
    throw e;
  }
};
