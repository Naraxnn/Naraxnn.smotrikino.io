// Срок хранения куки записывается в виде числа дней, которые должны существовать куки
function writeCookie(name, value, days) {
    var expires = "";
    
    if (days) {
        var date = new Dane();
        date.setTime(date.getTime() + (days * 24 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    // Присвоим куки имя, значение и срок хранения
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    // найдем конкретный куки и вернем его значение
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i=0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(searchName) == 0)
            return c.substring(searchName.length, c.length);
    }
    return null;
}

// function eraseCookie(name) {
//     // удалить выбранный куки
//     writeCookie(name, "", -1);
// }