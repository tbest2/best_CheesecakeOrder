eventHandler = function( event ) {
    /* do stuff */
    }
    $(function() {
    $(".foo").click(eventHandler);
    });

    
         //alert for dairy or gets replaces order form with thank you if successful
      function onOrder() {
         if(document.getElementById('NotesBox').value.includes("vegan")) {
            alert("contains dairy");
         } else {
            var toppingInfo = $("input:radio[name=flavour]:checked").val()
            var quantityInfo = document.getElementById("cakesNum").value
            document.getElementById("orderDiv").innerHTML = "Thank you! Your order has been placed for " 
            + quantityInfo + " " + toppingInfo + " cheesecake(s)"

         }
      }

         //changes text to selected month on drop down button
      function changeMonth(value) {
         document.getElementById("dropdownBtn").innerHTML= value;
      }

    