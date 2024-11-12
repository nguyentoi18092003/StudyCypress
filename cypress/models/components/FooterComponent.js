// FooterComponent.js
export default class FooterComponent {
    getColumns = () => cy.get("#fotcont .caption");
    getColumnsHeader = () => cy.get("h4");
    getDesc = () => cy.get("p");

    getAboutUsdata() {
        let aboutUsData = {};

        this.getColumns().eq(0).within(() => {
            this.getColumnsHeader().then($header => aboutUsData.header = $header.text().trim());
            this.getDesc().then($desc => aboutUsData.desc = $desc.text().replace(/\n\s+/g, " ").trim());
        });

        return cy.wrap(aboutUsData); // Trả về dữ liệu khi hoàn thành
    }
}
