var cart ={};//корзина

$.getJSON('goods.json', function(data) {
    var goods = data; //все то--ры в массиве
    checkCart();
    console.log(cart);
    showCart(); //вывожу то--ры на страницу

    function showCart() {
        if ($.isEmptyObject(cart)){
            var out = '<p>КОРЗИНА ПУСТА...</p><br><p>выберите <censored> на главной странице</p>';
            $('#my-cart').html(out);///корзина пуста
        }
        else {
        var out = '';
        for (var key in cart) {
            out+='<div class="goods-in-cart">';
            out+='<button id="delete" data-art="'+key+'">Х</button>';
            out+='<img src="'+goods[key].img+'">';
            out+='<p>'+goods[key].name+'</p>';
            out+='<p>'+goods[key].cost+'</p>';
            out+='<p> владелец: '+goods[key].owner+'</p>';
            out+='</div>';
        }}
        $('#mycart').html(out);
        $('#delete').on('click', deleteGoods);
        function deleteGoods() {
            var articul = $(this).attr('data-art');
            delete cart[articul];
            saveCartToLS();//сохраняю корзину в local storage
            showCart();
        } 
    }
    

    
});

function checkCart() {
    //проверяю наличие корзины в local storage 
    if (localStorage.getItem('cart')!=null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}



function saveCartToLS(){
    localStorage.setItem('cart',JSON.stringify(cart))
 }
