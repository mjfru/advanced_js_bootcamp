// const searchField = document.querySelector('#searchField');
// searchField.addEventListener('input', e => {
//   sessionStorage.setItem("searchField", e.target.value);
// })

// const populateSearch = () => {
//   const previousSearch = sessionStorage.getItem('searchField');
//   searchField.value = previousSearch;
// }

// populateSearch();

const form = document.querySelector("#checkoutForm");
form.addEventListener('input', (e) => {
  const { name, value } = e.target;
  const formData = JSON.parse(sessionStorage.getItem("formData")) ?? {};
  formData[name] = value;
  sessionStorage.setItem("formData", JSON.stringify(formData));
});

const populateForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("formData")) ?? {};
  for (let field in formData) {
    form.elements[field].value = formData[field];
  }
}

populateForm();