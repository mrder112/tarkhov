---
layout: post # Шаблон страницы
title:  "Фирменный стиль Кливия"  # Заголовок поста
date:   2019-06-19 09:29:20 +0700 # Дата и время публикации
categories: jekyll update # Категории поста
usemathjax: true # Включение поддержки математических формул
---


<div style="text-align: center;">
<h2>Работа над созданием фирменного стиля магазина цветов Кливия</h2>

<figure>
<img src="/assets/img/flowershop/1.png" alt="Титульная картинка" class="zoomable" onclick="openModal(this)" style="border-radius: 10px;">
</figure>
<figure>
<img src="/assets/img/flowershop/2.png" alt="Титульная картинка" class="zoomable" onclick="openModal(this)" style="border-radius: 10px;">
</figure>

<script>
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
</script>

<!-- Модальное окно для увеличенного изображения -->
<div id="imageModal" class="modal">
  <span class="close" onclick="closeModal()">&times;</span>
  <img class="modal-content" id="modalImage">
</div>

<h3>Использованное программное обеспечение:</h3>
<div class="software-list">
    <p><img src="/assets/img/icon/photoshop.png" alt="photoshop icon" style="width:20px; "> Adobe Photoshop</p>
    <p><img src="/assets/img/icon/illustrator.png" alt="adobeXD icon" style="width:20px; "> Adobe Illustrator</p>
</div>
<style>
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  padding-top: 50px;
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
