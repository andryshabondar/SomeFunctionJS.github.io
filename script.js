const getS = selector => document.querySelector(selector);

getS('.edit').onclick = function () {
    getS('.editBlock').style.display = 'block';
    getS('.textarea').value = getS('.show1').innerHTML;
    getS('.styleBlock').style.display = 'none';
}

getS('.style').onclick = function () {
    getS('.editBlock').style.display = 'none';
    getS('.styleBlock').style.display = 'block';
}

getS('.save').onclick = function () {
    getS('.show1').innerHTML = getS('.textarea').value;
    getS('.editBlock').style.display = 'none';
    getS('.show1').style.height = `100%`;
}

function fontSize() {
    getS('.show1').style.fontSize = event.target.value;
}

let optionBlock = getS('.optionBlock')
optionBlock.onchange = function fontFamily(event) {
    getS('.show1').style.fontFamily = event.target.value;
}


//*---------------------------------------------------------------------color text-------------------------------------------------*/
getS('.colorText').addEventListener('click', function () {
    getS('.colors').style.display = 'block';
    getS('.colorsBG').style.display = 'none';
})

getS('.td1').addEventListener('click', function () {
    getS('.show1').classList.add('c1');
    getS('.show1').classList.remove('c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9');
    getS('.colors').style.display = 'none';
})

getS('.td2').addEventListener('click', function () {
    getS('.show1').classList.add('c2');
    getS('.show1').classList.remove('.c1', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9');
    getS('.colors').style.display = 'none';
})

getS('.td3').addEventListener('click', function () {
    getS('.show1').classList.add('c3');
    getS('.show1').classList.remove('.c1', 'c2', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9');
    getS('.colors').style.display = 'none';
})

getS('.td4').addEventListener('click', function () {
    getS('.show1').classList.add('c4');
    getS('.show1').classList.remove('.c1', 'c2', 'c3', 'c5', 'c6', 'c7', 'c8', 'c9');
    getS('.colors').style.display = 'none';
})

getS('.td5').addEventListener('click', function () {
    getS('.show1').classList.add('c5');
    getS('.show1').classList.remove('.c1', 'c2', 'c3', 'c4', 'c6', 'c7', 'c8', 'c9');
    getS('.colors').style.display = 'none';
})

getS('.td6').addEventListener('click', function () {
    getS('.show1').classList.add('c6');
    getS('.show1').classList.remove('.c1', 'c2', 'c3', 'c4', 'c5', 'c7', 'c8', 'c9');
    getS('.colors').style.display = 'none';
})

getS('.td7').addEventListener('click', function () {
    getS('.show1').classList.add('c7');
    getS('.show1').classList.remove('.c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c8', 'c9');
    getS('.colors').style.display = 'none';
})

getS('.td8').addEventListener('click', function () {
    getS('.show1').classList.add('c8');
    getS('.show1').classList.remove('.c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c9');
    getS('.colors').style.display = 'none';
})


getS('.td9').addEventListener('click', function () {
    getS('.show1').classList.add('c9');
    getS('.show1').classList.remove('.c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8',);
    getS('.colors').style.display = 'none';
})


//*---------------------------------------------------------------------color B G-------------------------------------------------*/
getS('.backColor').addEventListener('click', function () {
    getS('.colorsBG').style.display = 'block';
    getS('.colors').style.display = 'none';
})

getS('.tdB1').addEventListener('click', function () {
    getS('.show1').classList.add('td1');
    getS('.show1').classList.remove('td2', 'td3', 'td4', 'td5', 'td6', 'td7', 'td8', 'td9');
    getS('.colorsBG').style.display = 'none';
})

getS('.tdB2').addEventListener('click', function () {
    getS('.show1').classList.add('td2');
    getS('.show1').classList.remove('td1', 'td3', 'td4', 'td5', 'td6', 'td7', 'td8', 'td9');
    getS('.colorsBG').style.display = 'none';
})

getS('.tdB3').addEventListener('click', function () {
    getS('.show1').classList.add('td3');
    getS('.show1').classList.remove('td1', 'td2', 'td4', 'td5', 'td6', 'td7', 'td8', 'td9');
    getS('.colorsBG').style.display = 'none';
})

getS('.tdB4').addEventListener('click', function () {
    getS('.show1').classList.add('td4');
    getS('.show1').classList.remove('td1', 'td2', 'td3', 'td5', 'td6', 'td7', 'td8', 'td9');
    getS('.colorsBG').style.display = 'none';
})

getS('.tdB5').addEventListener('click', function () {
    getS('.show1').classList.add('td5');
    getS('.show1').classList.remove('td1', 'td2', 'td3', 'td4', 'td6', 'td7', 'td8', 'td9');
    getS('.colorsBG').style.display = 'none';
})

getS('.tdB6').addEventListener('click', function () {
    getS('.show1').classList.add('td6');
    getS('.show1').classList.remove('td1', 'td2', 'td3', 'td4', 'td5', 'td7', 'td8', 'td9');
    getS('.colorsBG').style.display = 'none';
})

getS('.tdB7').addEventListener('click', function () {
    getS('.show1').classList.add('td7');
    getS('.show1').classList.remove('td1', '.td2', 'td3', 'td4', 'td5', 'td6', 'td8', 'td9');
    getS('.colorsBG').style.display = 'none';
})

getS('.tdB8').addEventListener('click', function () {
    getS('.show1').classList.add('td8');
    getS('.show1').classList.remove('.td1', 'td2', 'td3', 'td4', 'td5', 'td6', 'td7', 'td9');
    getS('.colorsBG').style.display = 'none';
})

getS('.tdB9').addEventListener('click', function () {
    getS('.show1').classList.add('td9');
    getS('.show1').classList.remove('td1', 'td2', 'td3', 'td4', 'td5', 'td6', 'td7', 'td8',);
    getS('.colorsBG').style.display = 'none';
})


//*---------------------------------------------------------------------Bold Cursive-------------------------------------------------*/
getS('#bold').addEventListener('click', function (event) {
    if (this.checked) {
        getS('.show1').style.fontWeight = event.target.value;
    }
    else {
        getS('.show1').style.fontWeight = 400;
    }
})

getS('#cursive').addEventListener('click', function (event) {
    if (this.checked) {
        getS('.show1').style.fontStyle = event.target.value;
    }
    else {
        getS('.show1').style.fontStyle = 'normal';
    }
})

//*---------------------------------------------------------------------Button add-------------------------------------------------*/

getS('.add').addEventListener('click', function () {
    getS('.container').style.display = 'none';
    getS('.tableList').style.display = 'block';

})

function radioLable() {
    getS('.tableList').style.height = '422px';
    getS('.table').style.display = 'block';
    getS('.list').style.display = 'none'
}

function radioList() {
    getS('.tableList').style.height = '250px';
    getS('.table').style.display = 'none';
    getS('.list').style.display = 'block';
}

getS('.createTable').addEventListener('click', function () {
    let countTR = getS('.countTRinput').value;
    let countTD = getS('.countTDInput').value;
    let width = getS('.widthOfTDInput').value;
    let height = getS('.heightOfTDInput').value;
    let borwidth = getS('.widthInput').value;
    let typeSelect = getS('.typeSelect').value;
    let colorSelect = getS('.colorSelect').value;
    if (countTR >= 1) {
        getS('.textarea').value += `<table style="border-spacing: 0; border-collapse: collapse">`;
        for (let i = 0; i < countTR; i++) {
            getS('.textarea').value += `<tr>`;
            for (let i = 0; i < countTD; i++) {
                getS('.textarea').value += `<td style="width:${width}px; height:${height}px; border: ${borwidth}px ${typeSelect} ${colorSelect}">TD</td>`;
            }
            getS('.textarea').value += `</tr>`;
        }
        getS('.textarea').value += `</table>`;
    }
    getS('.tableList').style.height = `250px`;
    getS('.container').style.display = 'block';
    getS('.tableList').style.display = 'none';
    getS('.table').style.display = 'none';
    getS('.list').style.display = 'none';
    if (getS('.table').style.display == 'none') {
        getS('#table').checked = ''
    }
})

getS('.createList').addEventListener('click', function () {
    getS('.container').style.display = 'block';
    getS('.tableList').style.display = 'none';
    getS('.table').style.display = 'none';
    getS('.list').style.display = 'none';
    if (getS('.list').style.display == 'none') {
        getS('#list').checked = ''
    }
    let countLiinput = getS('.countLiinput').value;
    let typeOfMarksSelect = getS('.typeOfMarksSelect').value;
    if (countLiinput >= 1) {
        getS('.textarea').value += `<ul style="list-style-type: ${typeOfMarksSelect}">`;
        for (let i = 0; i < countLiinput; i++) {
            getS('.textarea').value += `<li>items ${i + 1}</li>`;
        }
        getS('.textarea').value += `</ul>`;
    }
})