var selected ;
// Hidding the thank you section ..



  //get the number selected ..
var numbers =document.querySelectorAll(".numbers");
var i=0;
while (i<numbers.length) {
  numbers[i].addEventListener("click",function(){
  document.querySelector(".rate").innerHTML=this.innerHTML;
  selected = true; 
});
i++;
}

// submitting the number ..

document.querySelector(".submit").addEventListener("click",function(){
  //Show the thank you section ..
  if (selected) {
      document.querySelector(".thankyou").classList.remove("hidden");
  document.querySelector(".rating").classList.add("hidden");
  }else{
    console.log(selected);
  }


});


