new WOW().init() 

function botaowhatsApp() {

    texto = 'Olá, gostaria de *fazer um orçamento* com você Gabriel, vim do instagram.'
    encode = encodeURI(texto)

    url = `https://wa.me/5531983272409?text=` + encode



    $('#btn-whatsapp').attr('href', url)
}

botaowhatsApp()
