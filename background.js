
const openPage = () => {
  browser.tabs.create({
    "url": "/prompt/index.html"
  });
}

// salva a cifra na memória e depois abra o app em uma nova aba
const notify = (message, sender, sendResponse) => {
  browser.storage.sync.set({ "targetCifra": message?.cifra }).then(openPage)
}

// observa o recebmento de menssagens do content
browser.runtime.onMessage.addListener(notify);