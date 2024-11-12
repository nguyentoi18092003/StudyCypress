import HeaderComponent from "../../models/components/HeaderComponent"
import menuDetails from "../../fixtures/menuDetails"
describe('Header Component Test', function () {
    const BRAND_TEX = 'PRODUCT STORE';
    let headerComp;

    beforeEach(() => {//dang k hieu before hay beforeEach
        cy.visit('/');
        headerComp = new HeaderComponent()
    })
    it('Test for branch logo', function () {
        headerComp.brandLogoImg().should('be.visible')
        headerComp.brandLogo().should('contain.text', BRAND_TEX);

    })
    it('Test for header menu', function () {//Test nay dang chua tim thay phan tu k hieu kieu gi nua
        // cy.visit('/');
        let expectedMenuDetails = []
        //cy.log(JSON.stringify(menuDetailData))
        cy.fixture('menuDetails').then((data) => {
            expectedMenuDetails = data;
        })
        headerComp.getMenuDetails().then(actualMenuDetail => {
            cy.wrap('').then(() => {
                expect(actualMenuDetail).to.be.deep.eq(expectedMenuDetails)
                cy.log(JSON.stringify(actualMenuDetail))
                cy.log(JSON.stringify(expectedMenuDetails))
            })
        })
    })
})