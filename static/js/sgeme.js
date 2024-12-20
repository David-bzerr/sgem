// Função para alternar a visibilidade da sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle('open');
}

// Função para verificar o tamanho da tela e definir o estado da sidebar
function checkSidebarState() {
    const sidebar = document.getElementById("sidebar");
    
    if (window.innerWidth <= 768) {
        // Em dispositivos móveis, a sidebar começa fechada
        sidebar.classList.remove('open');
    } else {
        // No desktop, a sidebar deve permanecer aberta
        sidebar.classList.add('open');
    }
}

// Verifica o estado da sidebar quando a página é carregada
window.onload = checkSidebarState;

// Verifica o estado da sidebar sempre que a janela for redimensionada
window.onresize = checkSidebarState;