package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.GooglePage;
import utilities.Driver;

public class GoogleSearchStepDefinitions {
    GooglePage googlePage=new GooglePage();
    @Given("user is in the google page")
    public void user_is_in_the_google_page() {
        Driver.getDriver().get("https://www.google.com");

    }

    @Given("user search iphone")
    public void user_search_iphone() {
        googlePage.searcBox.sendKeys("iphone");
        googlePage.searcBox.submit();

    }

    @Then("verify result has iphone")
    public void verify_result_has_iphone() {
        Assert.assertTrue(Driver.getDriver().getTitle().contains("iphone"));

    }
    @Given("user search nokia")
    public void user_search_nokia() {
        googlePage.searcBox.sendKeys("nokia"+ Keys.ENTER);
    }

    @Then("verify result has nokia")
    public void verify_result_has_nokia() {
        Assert.assertTrue(Driver.getDriver().getTitle().contains("nokia"));
    }
    @Given("user search {string}")
    public void user_search(String string) {
        googlePage.searcBox.sendKeys(string+Keys.ENTER);
    }

    @Then("verify result has {string}")
    public void verify_result_has(String string) {
        Assert.assertTrue(Driver.getDriver().getTitle().contains(string));
    }



}
