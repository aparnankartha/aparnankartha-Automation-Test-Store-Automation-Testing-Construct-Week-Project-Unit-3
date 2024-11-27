class CheckoutPage {
    checkout() {
        cy.get('[title="Confirm Order"]').click();
    }
}
export default CheckoutPage;