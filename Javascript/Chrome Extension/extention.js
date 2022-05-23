let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteAll = document.getElementById("delete-all");
const saveTab = document.getElementById("save-tab");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}


saveTab.addEventListener("click",function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads();
    })
    
    
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads();
    //myLeads = []; 
})

deleteAll.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads();
})



function renderLeads() {
    let listItems = "";
    for (let i = 0 ; i < myLeads.length ; i++) {

        listItems += `<li><a href=' ${myLeads[i]} ' target='_blank'>  ${myLeads[i]}  </a></li>` ;
        
        // This is a another way to do this. I should be familiar.
        //const li = document.createElement("li");
        //li.textContent = myLeads[i];
        //ulEl.append(li);
    }
    
    ulEl.innerHTML= listItems;
}
