function cartAdd() {
    //Função de adicionar ao carrinho usando armazenamento de objetos no LocalStorage do navegador
}

function cartRemove() {
    //Função de remover ao carrinho usando armazenamento de objetos no LocalStorage do navegador
}

function showInfoModal(type) {
    //Código provisório para testes
    let modal = document.getElementById('itemInfoModal')
    modal.style.display = "block"

    switch (type.toLowerCase()) {
        case 'cart':
            modal.insertAdjacentHTML('beforeend',
                `<div class="modalTitleDiv">
            <h1 id="modalTitle">CARRINHO</h1>
            <a><i onclick="closeInfoModal()" id="modalCrossClose" class="fa-solid fa-x"></i></a>
        </div>
        <div class="modalContent">
            <div class="modalContentItem">
                <img draggable="false" src="./assets/img/pizza-placeholder.webp" alt="pizza"
                    class="modalContentItemImg   ">
                <div class="modalContentItemInfo">
                    <h1>Portuguesa</h1>
                    <p>
                        <span class="highlight">R$</span>59<span class="highlight">,</span>90
                    </p>
                </div>
            </div>

            <p class="modalContentSubtotal">Subtotal: <span class="highlight">R$</span>59<span
                    class="highlight">,</span>90</p>
        </div>
        <div class="modalButtons">
            <a href="#" onclick="closeInfoModal()">Fechar</a>
            <a href="#" class="modalButtonFinalizar"
                onclick="closeInfoModal(); createToast('success', 'Pedido enviado!')">Finalizar pedido</a>
        </div>`)
            break
        case 'itemdesc':
            modal.insertAdjacentHTML('beforeend',
                `<div class="modalTitleDiv">
            <h1 id="modalTitle">ITEM</h1>
            <a><i onclick="closeInfoModal()" id="modalCrossClose" class="fa-solid fa-x"></i></a>
        </div>
        <div class="modalContent">
            <div class="modalContentItem">
                <img draggable="false" src="./assets/img/pizza-placeholder.webp" alt="pizza"
                    class="modalContentItemImg   ">
                <div class="modalContentItemInfo">
                    <h1>Portuguesa</h1>
                    <p>
                        <span class="highlight">R$</span>59<span class="highlight">,</span>90
                    </p>
                </div>
            </div>

            <div style="margin-top: 30px; font-size: 20px; padding-left: 20px;">
                <p style="margin-bottom: 10px;">Ingredientes</p>
                <ul>
                    <li>Molho de tomate</li>
                    <li>Mussarela</li>
                    <li>Tomate</li>
                    <li>Bacon</li>
                    <li>Presunto</li>
                    <li>Cebola</li>
                </ul>
            </div>
        </div>
        <div class="modalButtons">
            <a href="#" onclick="closeInfoModal()">Fechar</a>
            <a href="#" class="modalButtonFinalizar"
                onclick="closeInfoModal(); createToast('success', 'Item adicionado ao carrinho!')">Adicionar ao carrinho</a>
        </div>`)
            break
        
        default:
            createToast('error', 'Ocorreu um erro ao executar a função')
            modal.style.display = "none"
    }

    //Função que receberá modalTitle, modalContent e modalButtons e criará um modal para ser exibido ao usuário com determinadas funções
}

function closeInfoModal() {
    let modal = document.getElementById("itemInfoModal")
    while (modal.firstChild) {
        modal.removeChild(modal.firstChild)
    }
    modal.style.display = "none"

}

function createToast(type, text) {
    //Função que receberá o tipo da notificação e seu conteúdo, e a transformará em uma notificação no canto da tela

    let toast = document.createElement("div");
    toast.classList.add("toast");
    toastBox.appendChild(toast);
    toastContent = document.createElement('p')
    toastContent.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${text}`


    console.log(type.toLowerCase())
    switch (type.toLowerCase()) {
        case 'error':
            toastContent.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${text}`
            break
        case 'success':
            toastContent.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${text}`
            break
        case 'invalid':
            toastContent.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${text}`
            break
    }

    toast.appendChild(toastContent)

    setTimeout(() => {
        toast.remove();
    }, 6000);
}

async function writeTextClipboard(text) {
    navigator.clipboard.writeText(text)
}