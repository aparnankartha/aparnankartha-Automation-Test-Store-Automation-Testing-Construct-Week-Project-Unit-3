import RegistrationPage from "../../support/ProjectAutomationTestStore/RegistrationPage.cy";
import LoginPage from "../../support/ProjectAutomationTestStore/LoginPage.cy";
import ChangePrice from "../../support/ProjectAutomationTestStore/ChangePrice.cy";
import ProductPurchase from "../../support/ProjectAutomationTestStore/ProductPurchase.cy";
import Cart from "../../support/ProjectAutomationTestStore/Cart.cy";
import CheckoutPage from "../../support/ProjectAutomationTestStore/CheckoutPage.cy";
import LogoutPage from "../../support/ProjectAutomationTestStore/LogoutPage.cy";

describe('Automation Test Store', () => {
    const register = new RegistrationPage();
    const login = new LoginPage();
    const price = new ChangePrice();
    const purchase = new ProductPurchase();
    const cart = new Cart();
    const checkout = new CheckoutPage();
    const logout =new LogoutPage();

    it('Registration', () => {
        register.visit();
        register.GoToRegister();
        register.fillRegistrationDetails();
    });

    it('login functionality', () => {
        login.visit();
        login.loginwithvalid();
        login.loginwithinvalid();
        login.forgotpasswordwithvalid();
        login.forgotpasswordwithinvalid();
        login.forgotloginwithinvalid();
    });

    it('Change price functionality', () => {
       price.changepricetoDollar();
       price.changepricetoEuro();
       price.changepricetoPound();
    });

    it('Purchasing product', () => {
       purchase.purchase();
    });

    it('Cart functionality', () => {
       cart.AddtoCart();
       cart.DeletefromCart();
    });

    it('Checkout functionality', () => {
        checkout.checkout();  
    });

    it('Logout functionality', () => {
        logout.logout();   
    });
});