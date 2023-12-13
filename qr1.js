async function fetchText() {
    let response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRDHAHoiPbCWWDtldENEq6iC7-4MLE5cFYSyTyrbeZoi4cNvXoxFyUi_uyK8EB_yXfLu5_SKjBrNSHh/pubhtml');

    if (response.status === 200) {
      let data = await response.text();
      let container = document.querySelector('.container');
      container.innerHTML = data;
      const tables = document.querySelectorAll("table");
      for (let t = 0; t < tables.length; t++) { 
        const qrcode = document.createElement("div");
        qrcode.classList.add("qrcode");
        qrcode.setAttribute('id', tables[t].children[1].children[0].cells[1].innerHTML.replaceAll(' ', '_'));
				qrcode.innerHTML = tables[t].children[1].children[0].cells[1].innerHTML;
        document.body.appendChild(qrcode)
				setTimeout(() => {
					new QRCode(document.getElementById(tables[t].children[1].children[0].cells[1].innerHTML.replaceAll(' ', '_')), `https://janinezielman.github.io/schouw2023/year1#${tables[t].children[1].children[0].cells[1].innerHTML.replaceAll(' ', '_').slice(0, 10)}`);
				}, "1000")
      }
    }
}

fetchText();