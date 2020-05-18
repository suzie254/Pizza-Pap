 
$(document).ready(function(){

    $(".delivery").hide();
    $(".yes").hide();
    $(".no").hide();
    $(".delivery-info h4").hide();
  
      $("#addtopping").click(function(event) {
        event.preventDefault();
        $(".toppings").append( '<select id="topping1" class="input">'+
        '<option value="" hidden disabled selected value>Pizza topping....</option>'+
        '<option value="300">Pepperoni</option>'+
        '<option value="2500">Mushrooms</option>'+
        '<option value="200">Sausage</option>'+
        '<option value="200">Onions</option>'+
        '<option value="200">Bacons</option>'+
        '<option value="200">Extra Cheese</option>'+
    '</select>');
});