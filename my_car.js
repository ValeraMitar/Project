window.addEventListener('load', function () {

    var element = document.querySelector('.carContent'),
        firstIcon = document.querySelector('.chosen'),
        clickSelect = document.querySelector('#someYears'),
        clickLiters = document.querySelector('#someLiters');

    var slideInfo = {
        series: {
            nextSlide: 'bodyType',
            classIcon: 'series'
        },
        bodyType: {
            nextSlide: 'year',
            classIcon: 'bodyType'
        },
        year: {
            nextSlide: 'engine',
            classIcon: 'year',
            E81: [2007, 2012],
            E82: [2007, 2011],
            E87: [2007, 2011],
            E88: [2008, 2011],
            F20: [2011, 2015],
            F21: [2015,2017],
            F22: [2013,2017],
            F23: [2014,2017],
            F45: [2014,2017],
            F46: [2015,2017],
            E21: [1975,1983],
            E30: [1982,1993],
            E36: [1990,2000],
            E46: [1997,2006],
            E90: [2004,2011],
            E91: [2008,2012],
            E92: [2006,2013],
            E93: [2007,2013],
            F30: [2011,2017],
            F31: [2012,2017],
            F34: [2013,2017],
            F32: [2013,2017],
            F33: [2013,2017],
            F36: [2014,2017],
            E12: [1972,1981],
            E28: [1981,1987],
            E34: [1988,1996],
            E39: [1995,2004],
            E60: [2003,2009],
            E61: [2004,2010],
            F07: [2009,2016],
            F10: [2009,2016],
            F11: [2010,2016],
            G30: [2016,2017],
            E24: [1975,1989],
            E63: [2003,2010],
            E64: [2004,2010],
            F12: [2011,2017],
            F13: [2011,2017],
            F06: [2012,2017],
            E23: [1977,1986],
            E32: [1986,1994],
            E38: [1994,2001],
            E65: [2001,2008],
            E66: [2002,2008],
            F02: [2008,2015],
            F01: [2008,2015],
            F04: [2009,2017],
            G11: [2015,2017],
            G12: [2015,2017],
            E83: [2003,2010],
            E25: [2010,2017],
            F26: [2014,2017],
            E53: [1999,2006],
            E70: [2006,2013],
            F15: [2013,2017],
            E71: [2008,2014],
            E72: [2009,2011],
            F16: [2014,2017]

        },
        engine: {
            nextSlide: 'end',
            classIcon: 'engine'
        }
    };

    element.addEventListener('click', action);
    firstIcon.addEventListener('click', showFirstBlock);
    clickSelect.addEventListener('change', changeIconForYear);
    clickLiters.addEventListener('change', changeIconForEngine);


    function showFirstBlock(event) {
        var target = event.target,
            idBlock = target.getAttribute('data-id'),
            block = document.querySelector(`#${idBlock}`),
            oldvisible = document.getElementsByClassName('visible');
        if (oldvisible) {
            while (oldvisible.length > 0) {
                oldvisible[oldvisible.length - 1].classList.remove('visible');
                oldvisible.length--;
            }
            block.classList.add('visible');
        }

    }


    function action(item) {
        var target = item.target,
            src = target.src,
            currentSlide = target.getAttribute('data-class'),
            currentSlideInside = target.getAttribute('data-id'),
            correctSeries = target.getAttribute('data-title'),
            nextSlideId = slideInfo[currentSlide].nextSlide,
            listDate = slideInfo.year[correctSeries],
            nextSlide = document.querySelector(`#${nextSlideId}`),
            icon = document.querySelector(`.${currentSlide}`),
            visibleInside = document.querySelector(`#${currentSlideInside}`),
            oldvisible = document.querySelector('.visible'),
            select = document.querySelector('#someYears');


        if (oldvisible) {
            oldvisible.classList.remove('visible');
        }
        if (correctSeries) {
            createYearsList(select, listDate);
        }

        icon.src = src;
        nextSlide.classList.add('visible');
        visibleInside.classList.add('visible');


    }

    function createYearsList(select, listDate) {
        for (var i = listDate[0]; i <= listDate[1]; i++) {
            var option = document.createElement('option');
            option.textContent = i;
            select.appendChild(option);
        }
    }

    function changeIconForYear() {
        var years = this.value,
            nextSlideId = slideInfo.year.nextSlide,
            nextSlide = document.querySelector(`#${nextSlideId}`),
            classIcon = slideInfo.year.classIcon,
            icon = document.querySelector(`.${classIcon}`),
            oldvisible = document.querySelector(`#${classIcon}`),
            h1 = document.createElement('h1'),
            elementOutsideIcon = document.querySelector('.selectYear');

        oldvisible.classList.remove('visible');

        nextSlide.classList.add('visible');
        icon.remove();
        h1.textContent = years;
        elementOutsideIcon.appendChild(h1);


    }

    function changeIconForEngine() {
        var years = this.value,
            nextSlideId = slideInfo.engine.nextSlide,
            nextSlide = document.querySelector(`#${nextSlideId}`),
            classIcon = slideInfo.engine.classIcon,
            icon = document.querySelector(`.${classIcon}`),
            oldvisible = document.querySelector(`#${classIcon}`),
            h1 = document.createElement('h1'),
            elementOutsideIcon = document.querySelector('.selectLiters');

        oldvisible.classList.remove('visible');

        nextSlide.classList.add('visible');
        icon.remove();
        h1.textContent = years;
        elementOutsideIcon.appendChild(h1);


    }


});