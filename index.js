const folderLinks = document.querySelectorAll('.open-link');

if (folderLinks.length > 0) {
    for (let index = 0; index < folderLinks.length; index++) {
        const folderLink = folderLinks[index];
        folderLink.addEventListener("click", function (e) {
            const folderName = folderLink.getAttribute('href').replace('#', '');
            const currentFolder = document.getElementById(folderName);
            folderOpen(currentFolder);
            e.preventDefault();
        });
    }
}

function folderOpen (currentFolder) {
    if (currentFolder) {
        const folderActive = document.querySelector('.catalog-open.open');
        currentFolder.classList.add('open');
        currentFolder.addEventListener('click', function (e) {
            if (!e.target.closest('.catalog-open-body')) {
                folderClose(e.target.closest('.catalog-open'));
            }
        });
    }
}

function folderClose (folderActive) {
    folderActive.classList.remove('open');
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const folderActive = document.querySelector('.catalog-open.open');
        folderClose(folderActive);
    }
});