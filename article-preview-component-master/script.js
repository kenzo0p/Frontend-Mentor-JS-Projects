let shareCompo = document.getElementById('share-compo');
console.log(shareCompo)
let shareBtn = document.querySelector('.share');
shareBtn.addEventListener("click", function () {
    shareCompo.style.display = 'block';
})