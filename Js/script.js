 
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

$('#addcart').click(function(event){
    event.preventDefault();
    var size = parseInt($('#size option:selected').val());
    var crust = parseInt($('#crust option:selected').val());
    let toppings= [];
    var topping = parseInt($('#topping option:selected').val());
    let toppingOne = parseInt($('#topping1 option:selected').val())
    if(!isNaN(topping)) {
      toppings.push(topping)
    } 
    if(!isNaN(toppingOne)) {
      toppings.push(toppingOne)
    }
    var quantity = parseInt($('#quantity').val());
    let costofToppings = 0
    
    if(toppings.length){
      for(i in toppings){
          costofToppings += toppings[i];
      }
    }
    let cost = size + crust+ costofToppings
    var total = cost*quantity;
    var grandTotal = 0;
     

    $('table#tablecart').append('<tr>'+'<td>'+ $("#size option:selected").text()+'</td>'+ '<td id="quantity">'+quantity+'</td>' + '<td id="price">'+cost+'</td>' +'<td id="total">'+total+'</td>'+'</tr>');

    $(".checkout").click(function() {
      $(".checkout").hide();
      $(".delivery").show();
      $("#yes").hide();
      $("#no").hide();
      $("#totalcost").show();
      $("#delivercost").show();
      $(".yes-button").show();
      $(".no-button").show();
      $(".address").hide();

      grandTotal = grandTotal + total;
      $("p span").html(grandTotal);
    });   
    $(".yes-button").click(function() {
        $("#delivercost").hide();
        $("#no").hide();
        $("#yes").hide();
        $(".address").show();
        $(".yes-button").hide();
        $(".no-button").hide();
        $("#totalcost span").html(grandTotal + 300);
      });
  