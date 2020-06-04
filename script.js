let progress = document.querySelector('.progress');
    table = document.querySelector('.proc');

    window.addEventListener('scroll', (e) => {
        e.preventDefault();
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        console.log(windowScroll);
        console.log(windowHeight);
    
        let per = windowScroll / windowHeight * 100;
        console.log(per);
        table.innerHTML = (per).toFixed(1) + ' %';

        progress.style.width = per + '%';
    });