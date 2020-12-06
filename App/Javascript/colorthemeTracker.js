const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    if (sessionStorage.getItem('colorTheme') == "dark") {
        sessionStorage.setItem('colorTheme', "light")
    } else {
        sessionStorage.setItem('colorTheme', "dark")
    }
});

if (sessionStorage.getItem('colorTheme') == "dark") {
    document.body.classList.toggle('dark');
}
