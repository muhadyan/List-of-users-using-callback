import { Tabel } from "./module";

function getData(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      return cb(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

let datas = [];

const data = getData("https://jsonplaceholder.typicode.com/users/", function (
  data
) {
  for (var key in data) {
    datas.push([
      data[key].id,
      data[key].name,
      data[key].username,
      data[key].email,
      `${data[key].address.street}, ${data[key].address.suite}, ${data[key].address.city}`,
      data[key].company.name
    ]);
  }
  console.log(datas);
  const tabel = new Tabel({
    kolom: ["ID", "Name", "Username", "Email", "Address", "Company"],
    data: datas
  });
  const app = document.getElementById("app");
  tabel.render(app);
});
