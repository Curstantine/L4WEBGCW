function ShowExtendedView(id) {
    var extendedView = document.getElementById("extendedView" + id);
    if (extendedView.style.display === "none") {
        extendedView.style.display = "block";
    } else {
        extendedView.style.display = "none";
    }
}
