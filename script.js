document.getElementById("btn-add-money").addEventListener("click", function (e) {
    e.preventDefault();
    const addedAmount = Number(document.getElementById("input-added-amount").value);
    const pinNumber = document.getElementById("input-pin-number").value;
    let balance = Number(document.getElementById("account-balance").innerText);
    
    
    if (pinNumber === "1234") {
      let newBalance = balance + addedAmount;
      document.getElementById("account-balance").innerText = newBalance;
      document.getElementById("account-balance").classList.add('text-orange-500');
      alert("Money has been added");
    } else {
      alert("Check your credentials");
    }

    document.getElementById("input-pin-number").value = "";
    document.getElementById("input-added-amount").value = "";

  });

  document.getElementById("btn-out-money").addEventListener("click", function (e) {
    e.preventDefault();
    const addedAmount = Number(document.getElementById("input-added-amount").value);
    const pinNumber = document.getElementById("input-pin-number").value;
    let balance = Number(document.getElementById("account-balance").innerText);
    
    
    if (pinNumber === "1234") {
      let newBalance = balance - addedAmount;
      if(newBalance<=0){
        alert(`You do not have sufficient amount. Balance is ${newBalance}`);
      }else {
        alert("Money has been transferred");
        document.getElementById("account-balance").innerText = newBalance;
        document.getElementById("account-balance").classList.add('text-red-500');
      }
    } else {
      alert("Check your credentials");
    }

    document.getElementById("input-pin-number").value = "";
    document.getElementById("input-added-amount").value = "";

  });
  
