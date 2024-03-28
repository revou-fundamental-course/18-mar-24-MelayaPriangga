function submitForm() {
    let form = document.forms['contact-form']

    let userName = form['user-name'].value;
    let emailName = form['email-name'].value;
    let minat = form['minat'].value;

    if (userName,emailName,minat == '') {
        alert('Periksa Kembali Inputan Anda')
    }else {
        alert('Selamat Datang ' + userName)
    }
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
    console.log('indexSlide ' + indexSlide);
    console.log('nilai n ' + n);
}


function showSlide(n) {
    let listImage = document.getElementsByClassName('banner-img');
    if (n > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;

    }

    listImage[indexSlide -1 ].style.display ='block';
    console.log('jumlah gambar ' + listImage.length);
    
    

}

setInterval(() => nextSlide(1), 3000);


