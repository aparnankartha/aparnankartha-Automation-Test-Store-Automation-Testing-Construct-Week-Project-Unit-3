class RegistrationPage {
    visit() {
      cy.visit('https://automationteststore.com');
    }
    GoToRegister() {
      cy.get('a[href*="https://automationteststore.com/index.php?rt=account/login"]').contains("Login or register").click();     
      cy.get('input[type="radio"]').type("checked");
      cy.get('[title="Continue"]').click();
    }
    fillRegistrationDetails(details) {
      cy.contains('Login or register').click();
      cy.get('[title="Continue"]').click();
      cy.get('[name="firstname"]').type("firstname");
      cy.get('[name="lastname"]').type("lastname");
      cy.get('[id="AccountFrm_email"]').type("emailsample1@gmail.com");
      cy.get('[id="AccountFrm_address_1"]').type("address1");
      cy.get('[id="AccountFrm_city"]').type("city");
      cy.get('select[name="zone_id"]').select("3513");
      cy.get('input[name="postcode"]').type("postcode");
      cy.get('select[name="country_id"]').type("country_id");
      cy.get('input[name="loginname"]').type("sampleoneloginname");
      cy.get('input[name="password"]').type("password");
      cy.get('input[name="confirm"]').type("password");
      cy.get('input[name="agree"]').type("agree");
      cy.get('button[title="Continue"]').click();
      cy.get('.maintext').contains(' Your Account Has Been Created!');
    }
    
  }
  export default RegistrationPage;
  
  
  