const table = document.querySelector('#js-table');
const deleteBtn = document.querySelector('#deleteBtn');

function showInfo() {
    const orderInfo = JSON.parse(localStorage.getItem('orderInfo'));
    console.log(orderInfo);
    for (const info in orderInfo) {
        // console.log(info);
        const tr = document.createElement('tr');
        const name = document.createElement('td');
        const value = document.createElement('td');
        name.textContent = `${info}: `;
        value.textContent = orderInfo[info];
        tr.appendChild(name);
        tr.appendChild(value);
        table.appendChild(tr);
    }  
}

function daleteInfo() {
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        localStorage.removeItem(key);
    }
    table.innerHTML = '';
}
    









window.addEventListener('load', showInfo);
deleteBtn.addEventListener('click', daleteInfo)