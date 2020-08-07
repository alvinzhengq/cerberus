const settings = () => {
    const toggleSwitch = document.getElementById("themeToggle");

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
}

export default settings