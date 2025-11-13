import { getParkData, getParkAlerts } from "./parkService.mjs";
import { alertTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

let parkSelect = "parks?parkCode=CANY";


function setAlerts(alerts) {
    const alertsContainer = Document.querySelector(".alerts > ul");
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
    console.log(parkData);
    const parkData = await getParkData(parkSelect);;
    const alerts = await getParkAlerts(parkData.parkCode);
    setHeaderFooter(parkData);
    setAlerts(alerts);
}


init();
