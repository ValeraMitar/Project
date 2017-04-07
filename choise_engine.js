window.addEventListener('load', function () {

    var element = document.querySelector('.typeofFuel'),
        benzineEngine = document.querySelector('.benzineEngine'),
        dieselEngine = document.querySelector('.dieselEngine'),
        benzineTables = document.querySelector('.benzine'),
        dieselTables = document.querySelector('.diesel'),
        imageLost = document.querySelector('.imgLost'),
        buttonBenzine = document.querySelector('.benzineEngineMenu'),
        buttonDiesel = document.querySelector('.dieselEngineMenu'),
        labelBenzine = document.querySelector('.fire1'),
        labelDiesel = document.querySelector('.fire2');

    element.addEventListener('click', giveList);
    buttonBenzine.addEventListener('click', buttons);
    buttonDiesel.addEventListener('click', buttons);

    function buttons(someButton) {
        var target = someButton.target,
            onClick = document.querySelector('.active');
        if (target.matches('.benzineEngineMenu li a:not(.active)')) {
            benzineTables.style.display = 'block';
            dieselTables.style.display = 'none';
            imageLost.style.display = 'none';
            target.classList.add('active');
            onClick.classList.remove('active');
        } else {
            if (target.matches('.dieselEngineMenu li a:not(.active)')) {
                benzineTables.style.display = 'none';
                dieselTables.style.display = 'block';
                imageLost.style.display = 'none';
                target.classList.add('active');
                onClick.classList.remove('active');
            }
        }
    }

    function giveList(typeFuel) {
        var target = typeFuel.target;

        if (target.matches('input#benzineEngine')) {
            benzineEngine.style.display = 'block';
            imageLost.style.display = 'block';
            labelBenzine.classList.add('style_fire');
            dieselEngine.style.display = 'none';
            labelDiesel.classList.remove('style_fire');
            dieselTables.style.display = 'none';

        } else {
            if (target.matches('input#dieselEngine')) {
                dieselEngine.style.display = 'block';
                imageLost.style.display = 'block';
                labelDiesel.classList.add('style_fire');
                benzineEngine.style.display = 'none';
                labelBenzine.classList.remove('style_fire');
                benzineTables.style.display = 'none';
            }
        }
    }


});