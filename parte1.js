document.getElementById('title').addEventListener('click', function() {
    alert('Has hecho clic en el título');
});

document.getElementById('description').addEventListener('focus', function() {
    console.log('El elemento descripción tiene el foco');
});

document.getElementById('image').addEventListener('mouseover', function() {
    console.log('El mouse está sobre la imagen');
});
