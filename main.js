document.querySelector("#input").addEventListener("input", searchResult)
function searchResult(){
  let search = document.querySelector("#input")
  let filter = search.value.toLowerCase()
  let items = document.querySelectorAll(".shoe")
  let mid = document.querySelectorAll(".mid")

  items.forEach((item) => {
    let text = item.textContent;
    if(text.toLocaleLowerCase().includes(filter.toLowerCase())){
      item.style.display = "";
    } else {
        item.style.display = "none";
    }
  })

}