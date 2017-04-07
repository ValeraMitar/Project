window.addEventListener('load', function () {

    var element = document.querySelector('.container');
    element.addEventListener('click', inspection);


    function inspection(event) {
        var target = event.target;
        if (target.matches('img.zoom_photo.Icon')) {
            givImg(target);
        } else {
            if (target.matches('img.zoom_photo')) {
                givImg(target);
            }
        }
    }

    function givImg(target) {
        var src = target.getAttribute('data-preview'),
            img = document.createElement('img'),
            div = document.createElement('div');
        img.src = src;
        document.body.appendChild(div);
        div.style.cursor = `url("img/cursor/zoom_out_32x32.png"), pointer`;
        div.style.width = `100%`;
        div.style.height = `calc(100% - 80px)`;
        div.style.position = `fixed`;
        div.style.top = `80px`;
        if (target.matches('img.zoom_photo.Icon')) {
            div.style.background = `rgba(4, 4, 4, 0.7) url(${src}) center/40% no-repeat`;
        } else {
            div.style.background = `rgba(4, 4, 4, 0.7) url(${src}) center/60% no-repeat`;  
        }

        /*element.removeEventListener('click',inspection);*/
        deleteDiv(div);

        div.removeEventListener('click',deleteDiv);
    }

    function deleteDiv (div) {
        div.addEventListener('click',div.remove);
    }
});
