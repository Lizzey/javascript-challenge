const AppState={};
      const formatAsMoney=(amount,buyerCountry)=> {
        let code="US";
        let newCurrency="USD";
        for (let i=0; i<countries.length;
            i++)
      {if (buyerCountry === countries[i].country)
      {return 
      amount.toLocaleString(countries[i].code,{
        style:"currency",
        currency:buyerCountry
      })}}};
      const detectCardType=({target})=> {};
      const validateCardExpiryDate=({target})=> {};
      const validateCardHolderName=({target})=> {};
       const uiCanInteract=()=>{};
       
        const displayCartTotal=({results})=>
        {const [data]=results;
     
         const {itemsInCart,buyerCountry}=data;
        appState.items=itemsInCart;
         appState.country=buyerCountry;
         
         appState.bill = itemsInCart.reduce(
         (total,item) =>{return total +(item.price * item.qty);}, 0);
         
         appState.billFormated=formatAsMoney(
         appState.bill,appState.country);
         
         document.querySelector("span[data-bill]")
           .textContent=appState.billFormated;
         uiCanInteract();
        };
      const fetchBill = () => {
        const api = "https://randomapi.com/api/006b08a801d82d0c982d0c9824dcfdfdfa3b3c";
    fetch(api).then(response) ;

response.json()
    .then(data => {
        displayCartTotal(data)
    }).catch(err => {
        console.log(err);
    });
          fetch(api).then((response) =>

              response.json())
              .then((data) =>

                  displayCartTotal(data))
              .catch((err) =>
                  console.log(err))

      }