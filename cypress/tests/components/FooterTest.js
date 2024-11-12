import FooterComponent from "../../models/components/FooterComponent"
describe('Footer Component Test', function(){
    let footerComp;
    beforeEach (()=>{
         cy .visit("/");
         footerComp= new FooterComponent();

    })

    it ('Test for brand logo', function(){
        let expectedDataUs={}

        cy.fixture('getAboutUsdata').then((data)=>{
            expectedDataUs=data;
        })
        footerComp.getAboutUsdata().then(actualAboutUsData=>{
            cy.log(cy.log(JSON.stringify(actualAboutUsData)))
            cy.wrap('').then(()=>{
                // expect (actualAboutUsData.header).to.equal(expectedDataUs.header);
                // expect (actualAboutUsData.desc).to.equal(expectedDataUs.desc);
                expect(actualAboutUsData).to.eql(expectedDataUs)
            })
        })
       
    })
}) 