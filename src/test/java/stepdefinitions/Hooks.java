package stepdefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.TimeoutException;
import utilities.Driver;

public class Hooks {
    //@Before TestNG deki gibi @BeforeMethod gibi çalışır
    //Her seneryodan önce çalışır
    @Before(order = 1)
    public void setup(){
        System.out.println("Hooks Class-Setup method");

    }
    //her özel seneryodan önce çalışır
    @Before(value = "@iphone",order = 2)
    public void searchIphone(){
        System.out.println("Hooks Class-Iphone method");
    }
    @After
    public void tearDown(Scenario scenario) throws InterruptedException {
        System.out.println("Hooks Class-Teardown method");
        //Screenshot almak için
        final byte[] screenshot=((TakesScreenshot)Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
        //scenario fail olursa
        if (scenario.isFailed()){
            scenario.embed(screenshot,"image/png","resim");
        }
        Thread.sleep(5000);
        Driver.closeDriver();
    }
}
