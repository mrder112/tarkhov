---
layout: post # Шаблон страницы
title:  "Project classroom" # Заголовок поста
date:   2022-04-12 09:29:20 +0700 # Дата и время публикации
categories: jekyll update # Категории поста
usemathjax: true # Включение поддержки математических формул
---


<div style="text-align: center;">
Работа над созданием 3D визуализации классной комнаты.
</div>
<figure>
<img src="/assets\img\classroom/1.png" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\classroom/2.png" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\classroom/3.png" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\classroom/4.png" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
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
  right: 35px;
  top: 15px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
}

/* Добавляем медиа-запрос для мобильных устройств */
@media screen and (max-width: 768px) {
  .close {
    bottom: 20px;
    top: auto;
    right: 50%;
    transform: translateX(50%);
  }
  
  .modal {
    padding-top: 200px;
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

В проекте были использованны программы:
<img src="/assets/img/icon/keyshot.png" alt="keyshot icon" style="width:20px;"> Keyshot
<img src="/assets/img/icon/cinema4d.png" alt="cinema4d icon" style="width:20px;"> Cinema 4D 
<img src="/assets/img/icon/photoshop.png" alt="photoshop icon" style="width:20px;"> Photoshop
