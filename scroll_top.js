window.addEventListener('load', function () {

    var second_date = document.querySelector('.second_date'),
        third_date = document.querySelector('.third_date'),
        four_date = document.querySelector('.four_date'),
        fifth_date = document.querySelector('.fifth_date'),
        avatarSourceSecondDateTop = second_date.getBoundingClientRect().bottom + window.pageYOffset - second_date.offsetHeight,
        avatarSourceThirdDateTop = third_date.getBoundingClientRect().bottom + window.pageYOffset - third_date.offsetHeight,
        avatarSourceFourDateTop = four_date.getBoundingClientRect().bottom + window.pageYOffset - four_date.offsetHeight,
        avatarSourceFifthDAteTop = fifth_date.getBoundingClientRect().bottom + window.pageYOffset - fifth_date.offsetHeight,
        img = document.getElementById('change_logo');
    /*ищу необходиммые мне переменные  потом вычисляю расстояние до верха элемента avatarSourceSecondDateTop*/

    var URLS = [
        {
            url: './img/logo_series/Old_BMW_Logo.png',
            check: function (yOffset) {
                return yOffset > avatarSourceSecondDateTop && yOffset < avatarSourceSecondDateTop + second_date.offsetHeight;
                /*срвниваю пвсстояние прокрутки с расстоянием до верха и низа элемента,значек олжен менятся когда расстояние прокрутки больше расстояния до значка и меньше расстояния до низа эл-та*/
            }
        },
        {
            url: './img/logo_series/BMW_1923.png',
            check: function (yOffset) {
                return yOffset > avatarSourceThirdDateTop && yOffset < avatarSourceThirdDateTop + third_date.offsetHeight;
            }
        },
        {
            url: './img/logo_series/bmw_logo_79_1.png',
            check: function (yOffset) {
                return yOffset > avatarSourceFourDateTop && yOffset < avatarSourceFourDateTop + four_date.offsetHeight;
            }
        },
        {
            url: './svg_numbers/BMW_bigSize.svg',
            check: function (yOffset) {
                return yOffset > avatarSourceFifthDAteTop && yOffset < avatarSourceFifthDAteTop + fifth_date.offsetHeight;
            }
        }

    ];

    window.addEventListener('scroll', function () {

        img.src = getLogo();
        img.style.boxShadow = ' 0 0 15px rgba(0, 134, 219, 0.77)';
        img.style.border = 'solid 1px rgba(201, 0, 0, 0.58)';
        img.style.borderRadius = '70px';
        /*(window.pageYOffset > avatarSourceSecondDateTop && window.pageYOffset < avatarSourceSecondDateTop + second_date.offsetHeight)?'./img/logo_series/Old_BMW_Logo.png':(window.pageYOffset > avatarSourceThirdDateTop && window.pageYOffset < avatarSourceThirdDateTop + third_date.offsetHeight)?'./img/logo_series/BMW_1923.png':(window.pageYOffset > avatarSourceFourDateTop && window.pageYOffset < avatarSourceFourDateTop + four_date.offsetHeight)?'./img/logo_series/bmw_logo_79_1.png':(window.pageYOffset > avatarSourceFifthDAteTop && window.pageYOffset < avatarSourceFifthDAteTop + fifth_date.offsetHeight)?'./svg_numbers/BMW_bigSize.svg':'./img/logo_series/Rapp-Logo-fertig.svg';*/

    });
    function getLogo() {
        var urlData = URLS.find(function (data) {
            return data.check(window.pageYOffset);
        });
        if (urlData) {
            return urlData.url;
        }
        return './img/logo_series/Rapp-Logo-fertig.svg';
    }
});