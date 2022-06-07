
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
                document.getElementById('download').innerHTML = '<iframe src="./download/geometrydash.rar" style="border-radius:5px;width:100%px;height:40px;"></iframe>'
            };
        }else {
            alert('Неверная Каптча')
        };
    } else {
        alert('Введите Каптчу');
    };
}