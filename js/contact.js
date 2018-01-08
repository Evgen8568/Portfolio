$.validator.messages.required = 'Это поле обязательно для заполнения.';
$.validator.messages.email = 'Пожалуйста введите коректный Email адрес.';
$.validator.addMethod('tel', function (value, element) {
    return /\+\d{9,}/.test(value);
}, 'Неверный формат номера телефона.');

$(document).ready(function () {
    $('#contact').validate({
        errorElement: 'span',
        rules: {
            phone: {
                tel: true
            }
        },
        submitHandler: function () {
            $.ajax(appSettings.baseApiUrl + 'messages', {
                method: 'POST',
                data: JSON.stringify({
                    name: 'name'
                }),
                success: alert("Спасибо!")
            });
        }
    });
});