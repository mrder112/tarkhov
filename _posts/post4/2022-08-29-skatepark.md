---
layout: post # Шаблон страницы
title:  "Project skatepark" # Заголовок поста
date:   2022-05-7 09:29:20 +0700 # Дата и время публикации
categories: jekyll update # Категории поста
usemathjax: true # Включение поддержки математических формул
---


<div style="text-align: center;">
Работа над созданием 3D визуализации скейтпарка.
</div>
<figure>
<img src="/assets\img\skatepark/1.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\skatepark/2.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\skatepark/3.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\skatepark/4.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\skatepark/5.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\skatepark/6.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<!-- Модальное окно для увеличенного изображения -->
<div id="imageModal" class="modal">
  <span class="close" onclick="closeModal()">&times;</span>
  <img class="modal-content" id="modalImage">
</div>

<style>
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  padding: 0;
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
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
}

.close {
  position: fixed;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
}

/* Медиа-запрос для мобильных устройств */
@media screen and (max-width: 768px) {
  .close {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
}

/* Медиа-запрос для ПК */
@media screen and (min-width: 769px) {
  .close {
    right: 35px;
    top: 15px;
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
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

/* Добавляем обработчик клика на модальное окно */
document.getElementById("imageModal").addEventListener("click", function(e) {
  if (e.target !== document.getElementById("modalImage")) {
    closeModal();
  }
});
</script>

В проекте были использованны программы:
<img src="/assets/img/icon/keyshot.png" alt="keyshot icon" style="width:20px;"> Keyshot
<img src="/assets/img/icon/cinema4d.png" alt="cinema4d icon" style="width:20px;"> Cinema 4D 
<img src="/assets/img/icon/photoshop.png" alt="photoshop icon" style="width:20px;"> Photoshop
