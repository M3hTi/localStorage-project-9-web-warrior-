const objData = {}

const orderForm = document.querySelector('#orderForm');
const firstFieldset = orderForm.querySelector('#fs1');


function showPreviousPage() {
    const fieldsetEl = document.createElement('fieldset');
    // Insert elements before the first fieldset
    orderForm.insertBefore(fieldsetEl, firstFieldset);
    let preData = location.search.slice(1)
    // console.log(preData);
    preData = preData.replace(/\+/g, ' ');
    // console.log(preData);
    preData = decodeURIComponent(preData);
    const preDataArr = preData.split('&');
    console.log(preDataArr);
    for (const data of preDataArr) {
        const nameValuePair = data.split('=');
        const name = nameValuePair[0];
        const value = nameValuePair[1];
        console.log(name, value);
        objData[name] = value;

        const labelEl = document.createElement('label');
        labelEl.textContent = `${name}:`
        labelEl.setAttribute('for', name);

        

        const inputEl = document.createElement('input');
        inputEl.textContent = value;
        inputEl.setAttribute('id', name);
        inputEl.setAttribute('name', name);
        inputEl.setAttribute('value', value);
        inputEl.setAttribute('readonly', true);
        inputEl.disabled = true;


        
        
        fieldsetEl.appendChild(labelEl)
        fieldsetEl.appendChild(inputEl);
        

        


        
    }
    console.log(objData);
}




window.addEventListener('load', showPreviousPage);