class ChangePrice{
    changepricetoPound(){
       
        cy.get('[class="dropdown-menu currency"]').contains('£ Pound Sterling').click({force:true});
    }
    changepricetoEuro(){
        cy.get('[class="dropdown-menu currency"]').contains('€ Euro').click({force:true});
    }
    changepricetoDollar(){
        cy.get('[class="dropdown-menu currency"]').contains('$ US Dollar').click({force:true});
    }
}
export default ChangePrice;