import HeaderComponent from "../../models/components/HeaderComponent"
const generateRandomUsername = (usernameLength) => {
    const ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const ALL_CHARS_LENGTH = ALL_CHARS.length;
    let randomUsername = "";
  
    for (let index = 0; index < usernameLength; index++) {
      randomUsername += ALL_CHARS.charAt(Math.floor(Math.random() * ALL_CHARS_LENGTH));
    }
  
    return randomUsername;
  };
const SIGN_UP_CRED={
    username:generateRandomUsername(9),
    password: "admin"
}  
describe('Login Test',function(){
    let headerComp;
    beforeEach (()=>{
        cy .visit('/');
        headerComp= new HeaderComponent();
    })
    it.only ('should be able to login with correct creds',()=>{
        headerComp.getSignUpLink().click({force:true});
        cy.get('.modal-dialog form').should('be.visible')
        cy.get('#sign-username').type(`${SIGN_UP_CRED.username}`,{force: true, waitForAnimations: true});
        cy.get('#sign-password').type(`${SIGN_UP_CRED.password}`,{force: true, waitForAnimations: true});
        cy.get('[onclick="register()"]').click({force:true});
        //verify alert giong ben login....
        // cy.on('window: alert',alert=>{
        //     expect(alert).to.contains("User does not exits.")
        // })
        
    })
   
    
    
})