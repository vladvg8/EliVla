function getFormPhone() {
    let fioPhone = document.getElementById('fioPhone').value
    let telephonePhone = document.getElementById('phonePhone').value
    let emailPhone = document.getElementById('emailPhone').value
    let datePhone = document.getElementById('datePhone').value  
    let select = document.getElementById('selectMemberPhone')
    let formAlert = document.getElementById('submitEvent');
    select.addEventListener('change', function() {
        let getValuePhone = this.value;
    })
    if (fioPhone == '' || telephonePhone == '' || emailPhone == '' || datePhone == '') {
        alert('Уважаемый пользователь, введите все поля.')
    } else {
        formAlert.className = 'show';
        setTimeout(function () {
        formAlert.className = formAlert.className.replace("show", "")
    }, 3000);
    }
}
