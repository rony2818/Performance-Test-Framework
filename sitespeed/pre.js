// https://beenanner.github.io/sitespeed.io/documentation/sitespeed.io/prepostscript/

module.exports = {
  run(context) {
    return context.runWithDriver((driver) => {
      // Go to login URL
      return driver.get('https://kite-dev-it-vn.hito-link.jp/#/login')
        .then(() => {

          // we fetch the selenium webdriver from context
          const webdriver = context.webdriver;
          const By = webdriver.By;

          // before you start, make your tenantCd, email and password
          const tenantCd = 'ppt';
          const email = 'tu.le@persol.co.jp';
          const password = 'Tu@123456';
          driver.findElement(By.name('tenantCd')).sendKeys(tenantCd);
          driver.findElement(By.name('email')).sendKeys(email);
          driver.findElement(By.name('password')).sendKeys(password);
          const loginButton = driver.findElement(webdriver.By.xpath("//button[contains(.,'Login')]"));
          loginButton.click();
          
        });
    })
  }
};
