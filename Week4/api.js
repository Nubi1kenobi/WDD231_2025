// api.js
// Functions
async function getJson(endpoint) {
  const apiKey = "LosPa6L0Uu646bgfGGAl95vFbVwZ0bLHedZGcmua";
  // construct the URL: baseURL + enfpoint + paramaeters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-API-KEY
  const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey
    }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}
// Render Climbing List Function
async function renderClimbingList() {
  const endPoint = "activities/parks?q=climbing"
  const listElement = document.getElementById("outputList")
  const data = await getJson(endPoint)
  const parks = data.data[0].parks
  const listHtml = parks.map(listTemplate).join("")
  listElement.innerHTML = listHtml
}

// Rendered List to HTML List
function listTemplate(item) {
  return `<li><a href="${item.url}">${item.fullName}</a>, ${item.states}</li>`
  
}

// code
const baseUrl = "https://developer.nps.gov/api/v1/";
//const endPoint1 = getJson('alerts?parkCode=acad,dena');
//const endPoint2 = getJson('parks?stateCode=id');
//const endPoint3 = getJson('campgrounds?parkCode=ciro');
//const endPoint4 = getJson('activities/parks?q=climbing');
//const endPoint5 = getJson('multimedia/galleries?q=bears');
renderClimbingList();


