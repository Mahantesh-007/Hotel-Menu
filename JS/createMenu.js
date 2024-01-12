function handleSubmit(event) {
  event.preventDefault();
  let dishname = event.target.dishName.value;
  let price = event.target.price.value;

  let previousValue = JSON.parse(localStorage.getItem("HotelMenu")) || [];
  console.log(previousValue);

  if(!Array.isArray(previousValue)){
    previousValue = []
  }

  localStorage.setItem("HotelMenu", JSON.stringify([...previousValue,{dishname,price}]));

  document.getElementById("myForm").reset();
}
