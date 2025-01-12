---
layout: post # Шаблон страницы
title:  "Project robot spider" # Заголовок поста
date:   2023-04-15 09:29:20 +0700 # Дата и время публикации
categories: jekyll update # Категории поста
usemathjax: true # Включение поддержки математических формул
---


<div style="text-align: center;">
<h2>Работа над созданием 3D модели робота паука</h2>

<p>В данном проекте была разработана детальная 3D модель робота-паука с проработкой всех механических элементов. 
Особое внимание было уделено реалистичности конструкции и техническим деталям.</p>
</div>
<figure>
<img src="/assets\img\robot_spider/1.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\robot_spider/2.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\robot_spider/3.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
</figure>
<figure>
<img src="/assets\img\robot_spider/4.jpg" alt="Титульная картинка" class="zoomable" onclick="openModal(this)">
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
  padding-top: 200px;
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
<h3>О проекте</h3>
<p>Модель создавалась с учетом следующих аспектов:</p>
<ul>
    <li>Детальная проработка корпуса и технических элементов</li>
    <li>Создание материалов и текстур для придания реалистичности</li>
</ul>

<h3>Использованное программное обеспечение:</h3>
<div class="software-list">
    <p><img src="/assets/img/icon/cinema4d.png" alt="cinema4d icon" style="width:20px;"> Cinema 4D - моделирование и анимация</p>
    <p><img src="/assets/img/icon/keyshot.png" alt="keyshot icon" style="width:20px;"> Keyshot - рендеринг и материалы</p>
    <p><img src="/assets/img/icon/photoshop.png" alt="photoshop icon" style="width:20px;"> Photoshop - постобработка</p>
</div>
</div>
