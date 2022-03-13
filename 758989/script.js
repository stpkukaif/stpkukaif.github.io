var cort = {}; //моя корзина
$('document').ready(function(){
    loadGoods();
    checkCort();
    showMiniCort();
});

function loadGoods() {
    //загрузка то--ров на страницу
    $.getJSON('bads.json', function (data) {
        var out = '';
        for (var key in data) {
            out+='<div class="single-goods">';
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<p>Ц..на: '+data[key]['cast']+'</p>';
            out+='<img src="'+data[key]['img']+'">';
            out+='<p class="desc">'+data[key]['description']+'</p>';
            out+='<button class="to-cort" data-art="'+key+'">Информация</button>'
            out+='</div>';
        }
        $('#goods').html(out);
        $('button.to-cort').on('click', addToCort);
    });
}

function addToCort() {
    //добавление то--ра в ко343343ну
    var articul = $(this).attr('data-art');
    if (cort[articul]!=undefined) {
        cort[articul]++;
    }
    else {
        cort[articul] = 1;
    }
    localStorage.setItem('cort',JSON.stringify(cort))
    console.log(cort);
    

    showMiniCort();
}

function checkCort() {
    //проверяю наличие корзины в local storage 
    if (localStorage.getItem('cort')!=null) {
        cart = JSON.parse(localStorage.getItem('cort'));
    }
}

function showMiniCort() {
    //показываю корзину
    var out = '';
    for (var w in cort){
        out+='<p>'+w+'---'+cort[w]+'</p>';
    }
    $('#mini-cort').html(out);
}
