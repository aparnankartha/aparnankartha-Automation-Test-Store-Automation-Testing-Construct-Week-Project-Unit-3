class ProductPurchase{
    purchase() {
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();
        cy.xpath('//img[@src="//automationteststore.com/image/thumbnails/18/77/new_ladies_red1_jpg-100216-120x120.jpg"]').should('be.visible').click();
        cy.get('[class="fa fa-cart-plus fa-fw"]').click();
        cy.get('#cart_checkout1').click();
        cy.get('[title="Confirm Order"]').click();
    }
}
export default ProductPurchase;
