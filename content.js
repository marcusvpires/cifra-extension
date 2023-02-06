
// envia uma menssagem para o background com a cifra
const notifyExtension = (ev) => {
    const cifra = document.querySelector(".cifra_cnt > pre").innerHTML
    browser.runtime.sendMessage({ "cifra": cifra });
}

// cria o botão que envia a mensagem
const createButton = () => {
    if (document.getElementById("expandir")) return
    // cria o componente
    const li = document.createElement("li")
    li.style = `
        height: 32px;
        line-height: 2;
        font-size: 11px;
        font-weight: bold;
        border-radius: 8px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #5d538e;
        margin-bottom: 10px;
        color: #ddd;
        cursor: pointer;`
    li.innerText = "Expandir"
    li.id = "expandir"
    const container = document.querySelector("#side-menu > ul")
    if (container) {
        container.insertBefore(li, container.firstChild)
        li.addEventListener("click", notifyExtension)
    }
}

createButton()

// cria o botão toda vez que atualisa a url
window.addEventListener('locationchange', createButton);
