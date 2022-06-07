
document.onload = rand();

function rand() {

document.getElementById('p1').innerHTML = Math.floor(Math.random() * 10);
document.getElementById('p2').innerHTML = Math.floor(Math.random() * 10);
document.getElementById('p3').innerHTML = Math.floor(Math.random() * 10);


};

function download() {
    console.log(document.getElementById('i1').value);
    if (document.getElementById('i1').value == document.getElementById('p1').innerHTML) {
        if (document.getElementById('i2').value == document.getElementById('p2').innerHTML){
            if (document.getElementById('i3').value == document.getElementById('p3').innerHTML) {
                document.getElementById('download').innerHTML = '<iframe src="./download/gd.part01.rar" style="border-radius:50%;width:1px;height:1px;"></iframe><iframe src="./download/gd.part02.rar" style="border-radius:50%;width:1px;height:1px;"></iframe><iframe src="./download/gd.part03.rar" style="border-radius:50%;width:1px;height:1px;"></iframe><iframe src="./download/gd.part04.rar" style="border-radius:50%;width:1px;height:1px;"></iframe><iframe src="./download/gd.part05.rar" style="border-radius:50%;width:1px;height:1px;"></iframe><iframe src="./download/gd.part06.rar" style="border-radius:50%;width:1px;height:1px;"></iframe><iframe src="./download/gd.part07.rar" style="border-radius:50%;width:1px;height:1px;"></iframe><iframe src="./download/gd.part08.rar" style="border-radius:50%;width:1px;height:1px;"></iframe>';
            };
        }else {
            alert('Неверная Каптча')
        };
    } else {
        alert('Введите Каптчу');
    };
}