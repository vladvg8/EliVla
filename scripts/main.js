let map = document.getElementById("map");
let newOne = document.getElementById("NewOne");
let newTwo = document.getElementById("NewTwo");
let newThree = document.getElementById("NewThree");
let newOnePhone = document.getElementById('firstNew')
let newTwoPhone = document.getElementById('secondNew')
let newThreePhone = document.getElementById('thirdNew')
let mapPhone = document.getElementById('mapPhone');

// Начало формы

    let aquaDiv = document.getElementById('AquaZone')
    let aquaSPADiv = document.getElementById('AquaZoneSPA')
    let SPADiv = document.getElementById('SPA')
    let typeOfMemberShip = "";

    function clickOnAquaZone () {
        typeOfMemberShip = "Аквазона"
        aquaDiv.style.outline = "1px solid black"
        aquaSPADiv.style.outline = ""
        SPADiv.style.outline = ""
    }

    function clickOnAquaZoneSPA () {
        typeOfMemberShip = "Аквазона + SPA"
        aquaDiv.style.outline = ""
        aquaSPADiv.style.outline = "1px solid black"
        SPADiv.style.outline = ""
    }

    function clickOnSPA () {
        typeOfMemberShip = "SPA"
        aquaDiv.style.outline = ""
        aquaSPADiv.style.outline = ""
        SPADiv.style.outline = "1px solid black"
    }

function getForm () {
    // snackbar
    let formAlert = document.getElementById('submitEvent');
    // элементы формы
    let nameForm = document.getElementById("FIO").value;
    let phoneForm = document.getElementById("Phone").value;
    let emailForm = document.getElementById("Email").value;
    let dateForm = document.getElementById("date").value;
    if (nameForm != '' && nameForm != '' && phoneForm != '' && emailForm != '' && dateForm != '' && typeOfMemberShip != '') {
        class Client {
            constructor(name, phone, email, date, membership) {
                this.name = name;
                this.phone = phone;
                this.email = email;
                this.date = date;
                this.membership = membership;
            } 
            // метод
            toJSON() {
                return {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    date: this.date,
                    membership: this.membership
                }
            }
        }
        // создание нового клиента
        let client = new Client(nameForm, phoneForm, emailForm, dateForm, typeOfMemberShip);
        let json = JSON.stringify(client);
        
    
        formAlert.className = 'show';
        setTimeout(function () {
            formAlert.className = formAlert.className.replace("show", "")
        }, 3000);
    } else {
        alert("Уважаемый пользователь, введите все поля.")
    }
}

// Конец формы

function urlToMap() {
    window.open("https://www.google.com/maps/place/%D0%9B%D0%B5%D0%B1%D1%8F%D0%B6%D0%B8%D0%B9/@53.9527969,27.4171668,14z/data=!4m10!1m2!2m1!1z0LvQtdCx0Y_QttC40Lk!3m6!1s0x46dbc50e5788fefd:0x199841fa5e56ccc4!8m2!3d53.9527969!4d27.4521857!15sCg7Qu9C10LHRj9C20LjQuVoQIg7Qu9C10LHRj9C20LjQuZIBCndhdGVyX3BhcmvgAQA!16s%2Fg%2F11b77q9jhg");
}
function urlForFirstNew() {
    window.location.href="../htmls/FirstNew.html";
}
function urlForSecondNew() {
    window.location.href="../htmls/SecondNew.html";
}
function urlForThirdNew() {
    window.location.href="../htmls/ThirdNew.html";
}
mapPhone.addEventListener("click", urlToMap);
map.addEventListener("click", urlToMap);
newOne.addEventListener("click", urlForFirstNew);
newTwo.addEventListener("click", urlForSecondNew);
newThree.addEventListener("click", urlForThirdNew);

