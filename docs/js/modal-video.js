document.addEventListener('DOMContentLoaded', function () {
    // Carga la API de iframe de YouTube
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Variables para los reproductores de YouTube
    let playerVirc, playerRP;

    // Función que se llama cuando la API de iframe de YouTube está lista
    window.onYouTubeIframeAPIReady = function () {
        playerVirc = new YT.Player('videoVirc', {
            events: {
                'onReady': onPlayerReady
            }
        });

        playerRP = new YT.Player('videoRP', {
            events: {
                'onReady': onPlayerReady
            }
        });
    };

    function onPlayerReady(event) {
        // Aquí puedes realizar acciones cuando el reproductor esté listo
    }

    const myModalVirc = document.getElementById('vircmodal');
    const myModalRP = document.getElementById('rpitayomodal');

    myModalVirc.addEventListener('hidden.bs.modal', function () {
        if (playerVirc) {
            playerVirc.pauseVideo();
        }
    });

    myModalRP.addEventListener('hidden.bs.modal', function () {
        if (playerRP) {
            playerRP.pauseVideo();
        }
    });
});
