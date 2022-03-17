var cort ={};//343343на

$.getJSON('bads.json', function(data) {
    var goods = data; //все то--ры в массиве
    checkcort();
    console.log(cort);
    showcort(); //вывожу то--ры на страницу

    function showcort() {
        if ($.isEmptyObject(cort)){
            var out = '<p>ПУСТО...</p>';
            $('#my-cort').html(out);///343343на пуста
        }
        else {
        var out = '';
        for (var key in cort) {
            out+='<div class="goods-in-cort">';
            out+='<button id="delete" data-art="'+key+'">Х</button>';
            out+='<img src="'+goods[key].img+'">';
            out+='<p>'+goods[key].name+'</p>';
            out+='<p>'+goods[key].cast+'</p>';
            out+='<p> владелец: '+goods[key].owner+'</p>';
            out+='</div>';
        }}
        $('#mycort').html(out);
        $('#delete').on('click', deleteGoods);
        function deleteGoods() {
            var articul = $(this).attr('data-art');
            delete cort[articul];
            savecortToLS();//сохраняю 343343ну в local storage
            showcort();
        } 
    }
    

    
});

function checkcort() {
    //проверяю наличие 343343ны в local storage 
    if (localStorage.getItem('cort')!=null) {
        cort = JSON.parse(localStorage.getItem('cort'));
    }
}



function savecortToLS(){
    localStorage.setItem('cort',JSON.stringify(cort))
 }
