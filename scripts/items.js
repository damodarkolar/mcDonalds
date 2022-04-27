   var btn=document.querySelector("#orderButton");

   function createOrder(items){
      return new Promise((accept, reject)=>{
           setTimeout(() => {
               accept(items); 
               oderDetailspreparation(items)              
           }, 2000);
       })
   };

   btn.addEventListener("click",()=>{
       var allItems=document.querySelectorAll("#container>#items div")
       var selectedItems=[];
       for(var i=0; i<allItems.length; i++){
           if(allItems[i].lastChild.checked){
               selectedItems.push(allItems[i]);
           }
       }

       createOrder(selectedItems)
       .then(result=>{console.log(result)})
       .catch(err=>{console.log(error)})
   })

   function oderDetailspreparation(items){
       var orderNumber=document.createElement("h2");
       orderNumber.innerText="Order Number :" +5969585587;
       var message=document.createElement("h1");
       message.innerText="Thank for Placing Order Please Visit again";

       var itemsdiv=document.createElement("div");
       for(i=0; i<items.length; i++){
           itemsdiv.append(items[i]);
       }
       document.querySelector("#orderDetails").append(orderNumber,itemsdiv,message);
   }