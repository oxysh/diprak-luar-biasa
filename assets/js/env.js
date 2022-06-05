$('.nav__dropdown').click(() => {
    $('.nav__dropdown-menu')[0].classList.add('active');
})

$('body').click(e => {
    if(!e.target.classList.contains('nav__dropdown') && !e.target.parentElement.classList.contains('nav__dropdown')) {
        $('.nav__dropdown-menu')[0].classList.remove('active')
    }
})

$('.form-control.wajib-diisi').on('input', e => {
    if(e.target.value == '') {
        e.target.parentElement.querySelector('.form-helper').classList.remove('hidden')
    }
    else {
        e.target.parentElement.querySelector('.form-helper').classList.add('hidden')
    }
})

$('.btn-close').click(e => {
    e.preventDefault();
    e.target.closest('.dialog').classList.remove('active');
    $('.dialog__bg')[0].classList.remove('active');

    $('form').find('.form__control').each(x => {
        $('form').find('.form__control')[x].value = formValue[x];
    })
})