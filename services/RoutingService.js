export class RoutingService {
    constructor() {}
    async navigateToLocation(locationArray = [], appName) {
        const AISECURITYANALYSIS_PAGE = "aisecurityanalysis-page";

       if (locationArray.length === 0 || locationArray[0] === AISECURITYANALYSIS_PAGE) {
            const pageUrl = `${assistOS.space.id}/${appName}/${AISECURITYANALYSIS_PAGE}`;
            await assistOS.UI.changeToDynamicPage(AISECURITYANALYSIS_PAGE, pageUrl);
            return;
        }
         if(locationArray[locationArray.length-1]!== AISECURITYANALYSIS_PAGE){
         console.error(`Invalid URL: URL must end with ${AISECURITYANALYSIS_PAGE}`);
            return;
        }
        const webComponentName = locationArray[locationArray.length - 1];
        const pageUrl = `${assistOS.space.id}/${appName}/${locationArray.join("/")}`;
        await assistOS.UI.changeToDynamicPage(webComponentName, pageUrl);
    }
}
