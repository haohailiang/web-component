const removeBtn = document.getElementById('removeBtn');
const moveBtn = document.getElementById('moveBtn');

removeBtn.addEventListener('click', () => {
    //remove hello-world
    const hello = document.querySelector('hello-world');
    hello.parentNode.removeChild(hello);
});
moveBtn.addEventListener('click', () => {
    //remove hello-world
    const hello = document.querySelector('hello-world');
    const newParent = document.getElementById('frame');
    // newParent.contentWindow.document.body.appendChild(hello);
    newParent.contentDocument.querySelector('.child').appendChild(hello);
})
