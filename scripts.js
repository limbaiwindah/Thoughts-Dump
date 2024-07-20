document.getElementById('shredbtn').addEventListener('click', function(){
    var note = document.getElementById('note');
    note.classList.add('crumpling');
    setTimeout(() => {
        note.value = "";
        note.classList.remove('crumpling');
    }, 1000);
});


