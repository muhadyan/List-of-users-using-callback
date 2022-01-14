class Tabel {
  constructor(init) {
    this.init = init;
  }

  bikinHeader(header) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    header.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  bikinBadan(badan) {
    let open = "<tbody>";
    let close = "</tbody>";
    badan.forEach((d) => {
      open += `
              <tr>
                  <td>${d[0]}</td>
                  <td>${d[1]}</td>
                  <td>${d[2]}</td>
                  <td>${d[3]}</td>
                  <td>${d[4]}</td>
                  <td>${d[5]}</td>
              </tr>
          `;
    });

    return open + close;
  }

  render(element) {
    let tabel =
      "<table class='table table-hover'>" +
      this.bikinHeader(this.init.kolom) +
      this.bikinBadan(this.init.data) +
      "</table>";
    element.innerHTML = tabel;
  }
}

export { Tabel };
