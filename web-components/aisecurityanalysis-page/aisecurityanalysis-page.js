export class AISecurityAnalysisPage {
    constructor(element, invalidate) {
        this.element = element;
        this.invalidate = invalidate;
        this.invalidate();

    }

    async beforeRender() {
        this.insertedText="Dummy Text"
    }

    async afterRender(){

    }

}
