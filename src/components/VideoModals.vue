<template>
  <!--=== Modal Structure ===-->
    <div id="video-modal-0" class="modal video-modal">
      <span class="close cursor modal-close">
        &times;
      </span>
      <div class="modal-content full-height">
        <div class="full-height">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UrCkaONd1FI?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div id="video-modal-1" class="modal video-modal">
      <span class="close cursor modal-close">
        &times;
      </span>
      <div class="modal-content full-height">
        <div class="full-height">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/lrMsl5BEVRg?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div id="video-modal-2" class="modal video-modal">
      <span class="close cursor modal-close">
        &times;
      </span>
      <div class="modal-content full-height">
        <div class="full-height">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/P1L-ZkSBwpU?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div id="video-modal-3" class="modal video-modal">
      <span class="close cursor modal-close">
        &times;
      </span>
      <div class="modal-content full-height">
        <div class="full-height">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Acf2SeZZqRU?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
</template>

<script>
import M from 'materialize-css'
export default {
    name: 'VideoModals',
    mounted(){
        var stopVideo = function(modal) {
            var currentIframe = modal.querySelector(".modal-content > div > iframe");
            var currentIframe2 = modal.querySelector(".modal-content > div > iframe");
            currentIframe.src = currentIframe2.src;
        };
        var ModalVideo = document.querySelectorAll(".video-modal");
        M.Modal.init(ModalVideo, {
            endingTop: "20%",
            onCloseStart: stopVideo
        });
    }
}
</script>

<style scoped>
.modal.video-modal{
    overflow-y: visible;
    width: 80%;
    height: 70vh;
    max-width: 800px;
    overflow: visible;
}
.modal .modal-content {
    padding: 0 !important;
}
span.close.cursor.modal-close {
    background: black;
    color: white;
    font-size: 40px;
    position: absolute;
    top: -45px;
    right: 0;
    height: 40px;
    width: 40px;
    line-height: 0.9;
    text-align: center;
}
</style>