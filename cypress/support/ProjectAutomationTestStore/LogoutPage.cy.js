class LogoutPage{
    logout(){
        cy.get('[data-original-title="Logoff"]').click();
    }
}
export default LogoutPage;