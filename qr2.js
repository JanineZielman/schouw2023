async function fetchText() {
    let response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSaUv4DpaXBtBXr7mGO_DVuxzWhMgZ_oXGZBDQlWO4eeoRnPtkc_-39ZWNYx_yiFIx8MH2vXAPUhlN3/pubhtml');

    if (response.status === 200) {
      let data = await response.text();
      let container = document.querySelector('.container');
      container.innerHTML = data;
      const tables = document.querySelectorAll("table");
      for (let t = 0; t < tables.length; t++) { 
        const qrcode = document.createElement("div");
        qrcode.classList.add("qrcode");
        qrcode.setAttribute('id', tables[t].children[1].children[0].cells[1].innerText.replaceAll(' ', '_').replaceAll('ë', 'e').replaceAll('é', 'e').replaceAll('á', 'a').replaceAll('í', 'i').replaceAll('ö', 'o'));
				qrcode.innerHTML = tables[t].children[1].children[0].cells[1].innerText;
        document.body.appendChild(qrcode)
				setTimeout(() => {
					new QRCode(document.getElementById(tables[t].children[1].children[0].cells[1].innerText.replaceAll(' ', '_').replaceAll('ë', 'e').replaceAll('é', 'e').replaceAll('á', 'a').replaceAll('í', 'i').replaceAll('ö', 'o')), `https://janinezielman.github.io/schouw2023/year2#${tables[t].children[1].children[0].cells[1].innerHTML.replaceAll(' ', '_').replaceAll('ë', 'e').replaceAll('é', 'e').replaceAll('á', 'a').replaceAll('í', 'i').replaceAll('ö', 'o').slice(0, 10)}`);
				}, "1000")
      }
    }
}

fetchText();