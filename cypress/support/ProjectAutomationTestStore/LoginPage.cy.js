class LoginPage {
    visit(){
        cy.visit('https://automationteststore.com/index.php?rt=account/login');
    }
    loginwithvalid() {
        
        cy.get('input[name="loginname"]').type('username');
        cy.get('input[name="password"]').type('password');
        cy.get('button[title="Login"]').click();
    }
    loginwithinvalid(){
        cy.get('input[name="loginname"]').type('Aparna');
        cy.get('input[name="password"]').type('a1w322443');
        cy.get('button[title="Login"]').click();
        cy.get('.alert-danger').contains('Error: Incorrect login or password provided.');
    }
    forgotpasswordwithvalid(){
        cy.visit('https://automationteststore.com/index.php?rt=account/login');
        cy.get('a[href*="https://automationteststore.com/index.php?rt=account/forgotten/password"]').contains("Forgot your password?").click();  
        cy.get('input[name="loginname"]').type('Aparna123');
        cy.get('input[id="forgottenFrm_email"]').type('aparnankartha@gmail.com');
        cy.get('[title="Continue"]').click();
        cy.get('.alert-success').contains(' Success: Password reset link has been sent to your e-mail address');
    }
    forgotpasswordwithinvalid(){
        cy.get('a[href*="https://automationteststore.com/index.php?rt=account/forgotten/password"]').contains("Forgot your password?").click();  
        cy.get('input[name="loginname"]').type('apar');
        cy.get('input[id="forgottenFrm_email"]').type('emailsample@gmail.com');
        cy.get('[title="Continue"]').click();
        cy.get('.alert-error').contains('Error: No records found matching information your provided, please check your information and try again!');

    }
    forgotloginwithinvalid(){
        cy.get('a[href*="https://automationteststore.com/index.php?rt=account/forgotten/password"]').contains("Forgot your password?").click();  
        cy.get('input[name="loginname"]').type('apar');
        cy.get('input[id="forgottenFrm_email"]').type('emailsample@gmail.com');
        cy.get('[title="Continue"]').click();
        cy.get('.alert-error').contains('Error: No records found matching information your provided, please check your information and try again!');
    }
}
export default LoginPage;

