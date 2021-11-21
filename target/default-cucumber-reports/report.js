$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/fhcregister.feature");
formatter.feature({
  "name": "FhcTrip Registiration",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@fhcregister"
    }
  ]
});
formatter.scenario({
  "name": "fhcTrip registiration test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@fhcregister"
    },
    {
      "name": "@SingleDataRegister"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici fc trip sayfasindadir",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_fc_trip_sayfasindadir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici create a new account butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_create_a_new_account_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici username girer \"Ahmet\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_username_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici password girer \"123Manager!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_password_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici email girer \"faker ile olusturuluyor\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_email_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici fullname girer  \"Ahmet Ali Bey\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_fullname_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici phone girer \"0312456879\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_phone_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici SSN girer \"010102098\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_SSN_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Driven lisans girer \"010203AB01\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_Driven_lisans_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici country dropdown secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_country_dropdown_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici state dropdown secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_state_dropdown_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici adress girer \"Asagiayranci\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_adress_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici working sector girer \"QA\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_working_sector_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici birthday girer \"14/01/1980\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullanici_birthday_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"User Data was inserted successfully\" mesajini goruntuler.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullaniciMesajiniGoruntuler(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //div[@class\u003d\u0027bootbox-body\u0027]\u0027 (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat stepdefinitions.FhcLoginCreateStepDefinitions.kullaniciMesajiniGoruntuler(FhcLoginCreateStepDefinitions.java:110)\r\n\tat ✽.kullanici \"User Data was inserted successfully\" mesajini goruntuler.(file:///D:/java/selenium/selenium%20classlar/mycucumberframeworkTEKRAR/src/test/resources/features/fhcregister.feature:20)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027bootbox-body\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.183)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027APPLE-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.183, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\apple\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50254}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 104d16401534fca2d995f1b3a1ba38d6\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027bootbox-body\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat stepdefinitions.FhcLoginCreateStepDefinitions.kullaniciMesajiniGoruntuler(FhcLoginCreateStepDefinitions.java:110)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "kullanici alert mesajindaki OK butonuna tiklar.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginCreateStepDefinitions.kullaniciAlertMesajindakiOKButonunaTiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "resim");
formatter.after({
  "status": "passed"
});
});