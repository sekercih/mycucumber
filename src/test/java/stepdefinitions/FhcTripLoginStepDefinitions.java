package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.FhcTripLoginPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class FhcTripLoginStepDefinitions {
    FhcTripLoginPage fhcTripLoginPage=new FhcTripLoginPage();

    @Given("user is on the fhctriplogin page")
    public void user_is_on_the_fhctriplogin_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("fhc_login_url"));

    }

    @Given("user enters valid username")
    public void user_enters_valid_username() {
        fhcTripLoginPage.user.sendKeys(ConfigurationReader.getProperty("gecerli_username"));

    }

    @Given("user enters  valid password")
    public void user_enters_valid_password() {
        fhcTripLoginPage.password.sendKeys(ConfigurationReader.getProperty("gecerli_password"));

    }

    @Given("user clicks login button")
    public void user_clicks_login_button() {
        fhcTripLoginPage.login.click();

    }

    @Then("verify login is successfull")
    public void verify_login_is_successfull() {
        Assert.assertTrue(Driver.getDriver().getTitle().contains("ListO00fUsers"));



}
    @Given("user enters valid username {string}")
    public void user_enters_valid_username(String string) {
        fhcTripLoginPage.user.sendKeys(string);

    }

    @Given("user enters  valid password {string}")
    public void user_enters_valid_password(String string) {
        fhcTripLoginPage.password.sendKeys(string);

    }
}
