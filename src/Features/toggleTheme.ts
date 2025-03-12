const toggleTheme = (): void => {
    if (localStorage.Theme) {
        if (localStorage.Theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.Theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("Theme", "dark");
        }
    } else {
        document.documentElement.classList.add("dark");
        localStorage.Theme = "dark";
    }
}

export default toggleTheme