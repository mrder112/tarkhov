---
layout: post # Шаблон страницы
title:  "Проект разработки сайта ArtLab" # Заголовок поста
date:   2020-08-16 09:29:20 +0700 # Дата и время публикации
categories: jekyll update # Категории поста
usemathjax: true # Включение поддержки математических формул
---


<div style="text-align: center;">
<h2>Работа над созданием сайта</h2>

<p>В данном проекте я занимался разработкой сайта для определенной компании.</p>
</div>
<p>Пк версия сайта</p>
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
  <iframe src="https://www.youtube.com/embed/crJ_gEejWHs?si=FUbR9iBYwmRv3h6f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
<figure>
<img src="/assets\img\artlab/1.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\artlab/2.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\artlab/3.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<div id="imageModal" class="modal">
  <span class="close" onclick="closeModal()">&times;</span>
  <img class="modal-content" id="modalImage">
</div>
<h3>Использованное программное обеспечение:</h3>
<div class="software-list">
    <p><img src="/assets/img/icon/photoshop.png" alt="photoshop icon" style="width:20px;"> Adobe Photoshop</p>
    <p><img src="/assets/img/icon/adobexd.png" alt="adobeXD icon" style="width:20px;"> Adobe XD</p>
    <p><img src="/assets/img/icon/illustrator.png" alt="adobeXD icon" style="width:20px;"> Adobe Illustrator</p>
</div>
<style>
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  padding-top: 150px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  cursor: pointer;
}

.modal-content {
  margin: auto;
  display: block;
  max-width: 90%;
  max-height: 90vh;
}

.close {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .close {
    position: absolute;
    left: auto;
    right: 35px;
    top: 15px;
    bottom: auto;
    transform: none;
  }
}

.zoomable {
  cursor: pointer;
}
</style>

<script>
function openModal(img) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = img.src;
  
  modal.onclick = function(e) {
    if (e.target === modal || e.target === modalImg) {
      closeModal();
    }
  }
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
</script>

<div class="project-description">
</div>
