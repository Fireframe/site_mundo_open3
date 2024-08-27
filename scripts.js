document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o link "Preços" no cabeçalho
    const precosLink = document.querySelector('header nav ul li a[href="#"]');

    // Seleciona a seção de preços
    const precosSection = document.querySelector(".pricing");

    // Adiciona o evento de clique ao link
    precosLink.addEventListener("click", function (e) {
        e.preventDefault(); // Evita o comportamento padrão do link

        // Realiza a rolagem suave até a seção de preços
        precosSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
