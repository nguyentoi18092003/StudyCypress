import HeaderComponent from "../../models/components/HeaderComponent"
const LOGIN_CRED={
    username:"tun",
    password:"admin"
}
describe('Login Test',function(){
    let headerComp;
    beforeEach (()=>{
        cy .visit('/');
        headerComp= new HeaderComponent();
    })
    it ('should be able to login with correct creds',()=>{
        headerComp.loginLink().click({force:true});
        cy.get('#logInModal form').should('be.visible')
        cy.get('#loginusername').type(`${LOGIN_CRED.username}`,{force: true, waitForAnimations: true});
        cy.get('#loginpassword').type(`${LOGIN_CRED.password}`,{force: true, waitForAnimations: true});
        cy.get('[onclick="logIn()"]').click({force:true});
        cy.get('#nameofuser').should('be.visible');
        cy.get('#nameofuser').should('contain.text',`Welcome ${LOGIN_CRED.username}`);
        cy.on('window: alert',()=>{
            expect(alert).to.contains("User does not exits.")
        })
    })
    it('should be able to see wrong username',()=>{
        headerComp.loginLink().click({force:true});
        
        cy.get('#logInModal form').should('be.visible')
        cy.get('#loginusername').type(`${LOGIN_CRED.username}_WRONG`,{force: true, waitForAnimations: true});
        cy.get('#loginpassword').type(`${LOGIN_CRED.password}`,{force: true, waitForAnimations: true});
        cy.get('[onclick="logIn()"]').click({force:true});
        cy.on('window: alert',alert=>{
            expect(alert).to.contains("User does not exits.")
        })
    })
    it('should be able to see wrong password',()=>{
        headerComp.loginLink().click({force:true});
        
        cy.get('#logInModal form').should('be.visible')
        cy.get('#loginusername').type(`${LOGIN_CRED.username}`,{force: true, waitForAnimations: true});
        cy.get('#loginpassword').type(`${LOGIN_CRED.password}_WRONG`,{force: true, waitForAnimations: true});
        cy.get('[onclick="logIn()"]').click({force:true});
        cy.on('window: alert',alert=>{
            expect(alert).to.contains("User does not exits.")
        })
    })
})