//validate input section
const validateInput =() => {
    const billAmount= document.querySelector(".bill-amount");
    const numberOfPeople= document.querySelector(".number-of-people");
    if (!billAmount.value)  {
        billAmount.classList.add("form-control-error");
        numberOfPeople.classList.remove("form-control-error")
        return false;
    }if(!numberOfPeople.value){
        billAmount.classList.remove("form-control-error")
        numberOfPeople.classList.add("form-control-error");
        return false;
    }
    billAmount.classList.remove("form-control-error")
    numberOfPeople.classList.remove("form-control-error")
    return true;
    
  }
  //custom input
  const custom =document.querySelector('.custom-tip')
  //listening for a focus event 
  custom.addEventListener('focus',(event)=>{
      event.preventDefault();
      
      // console.log(custom.value)
      if (custom.value){
          const billAmount=document.querySelector('.bill-amount').value
          const numberOfPeople=document.querySelector('.number-of-people').value
          const customPercentage=Number(custom.value)/100
             if (numberOfPeople){
                  const tipAmount =(billAmount * customPercentage)/numberOfPeople
                  const totalAmount = (billAmount /numberOfPeople) +tipAmount
                  document.querySelector('.tip-amount').innerHTML = `$${tipAmount}`
                  document.querySelector('.total-amount').innerHTML = `$${totalAmount}`
             }
          }
      
  //listening for a key press event 
      custom.addEventListener('keypress',(event)=>{
          console.log(event.target.value)
      })
  })
  //reset
  const resetForm = () =>{
      document.querySelector('.bill-amount').value = "";
      document.querySelector('.number-of-people').value = "";
      document.querySelector(".tip-amount").innerHTML = "$0.00";
      document.querySelector(".total-amount").innerHTML = "$0.00";
      document.querySelector('.custom-tip').value=''
      
      
      // console.log("reset button clicked")   
  }
  const reset=document.querySelector('.reset-btn')
  reset.addEventListener('click', resetForm )
  
  
  //perentage buttons
  const buttons = Array.from(document.querySelectorAll('button'));
  let tipPercentage;
  buttons.forEach(element =>{
      element.addEventListener('click', (e)=>{
          e.preventDefault()
          if(validateInput()){
          const billAmount = document.querySelector('.bill-amount').value;
          const numberOfPeople =document.querySelector('.number-of-people').value;
          tipPercentage=(e.target.id) 
          const tipAmount=(billAmount * tipPercentage )/numberOfPeople
          const totalAmount=(billAmount/numberOfPeople)+tipAmount
          document.querySelector(".tip-amount").innerHTML =`$${tipAmount}`;
          document.querySelector(".total-amount").innerHTML =`$${totalAmount}`;
          }
      
     })
  })