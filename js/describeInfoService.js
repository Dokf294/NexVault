let slots = document.querySelectorAll(".slot-services");

function arrowAnim(arrow, todeg){
    arrow.style.transform = `rotate(${todeg}deg)`
};
slots.forEach(btn => {
    btn.addEventListener('click', () => {
        let isOpen = btn.dataset.open === "true";
        const text = btn.getElementsByClassName('text')[0];
        const button = btn.getElementsByClassName('button')[0];
        const arrow=btn.querySelector('.stat-deployed svg'); 

        if (!text.dataset.maxHeight) text.dataset.maxHeight = text.scrollHeight + 'px';
        if (!button.dataset.maxHeight) button.dataset.maxHeight = (button.scrollHeight+50) + 'px';

        if (isOpen) {
            text.style.maxHeight = '0';
            button.style.maxHeight = '0';
            text.style.opacity = '0';
            button.style.opacity = '0';
            arrowAnim(arrow, 0);
        } else {
            text.style.maxHeight = text.dataset.maxHeight;
            button.style.maxHeight = button.dataset.maxHeight;
            text.style.opacity = '1';
            button.style.opacity = '1';
            arrowAnim(arrow, 180);
        }
        btn.dataset.open = (!isOpen).toString();
    });
});

