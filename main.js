var elSiteForm = document.querySelector(".form-js");
var elTextInput = elSiteForm.querySelector(".text-input-js");
var elAddBtn = elSiteForm.querySelector(".add-btn-js");
var elSiteList = document.querySelector(".js-list");






elAddBtn.addEventListener("click", function(event){
  event.preventDefault();

  if (!isNaN(elTextInput.value)){
    alert("Iltimos faqat text kirirting");
    return;
  };

  var newArray = [];
  newArray.push(elTextInput.value);
  console.log(newArray);

  for (let i = 0; i < newArray.length; i++) {
    var deleteBtn = document.createElement("button");
    deleteBtn.prepend("delete");
    var newItem = document.createElement("li");
    newItem.append(newArray[i]);
    newItem.append(deleteBtn);
    elSiteList.appendChild(newItem);
    newArray.innerHTML = "";
  }
});
