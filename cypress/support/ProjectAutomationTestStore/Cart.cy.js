class AddtoCart{
    AddtoCart() {
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();
        cy.xpath('//img[@src="//automationteststore.com/image/thumbnails/18/77/new_ladies_red1_jpg-100216-120x120.jpg"]').should('be.visible').click();
        cy.get('[class="fa fa-cart-plus fa-fw"]').click();
    }
    DeletefromCart(){
        cy.get('[class="menu_text"]').contains('Cart').click({force:true});
        cy.xpath('(//i[@class="fa fa-trash-o fa-fw"])[1]').click();
    }
}
export default AddtoCart;
