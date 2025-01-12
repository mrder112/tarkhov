---
layout: post # Шаблон страницы
title:  "Project skatepark" # Заголовок поста
date:   2022-05-7 09:29:20 +0700 # Дата и время публикации
categories: jekyll update # Категории поста
usemathjax: true # Включение поддержки математических формул
---


<div style="text-align: center;">
<h2>Работа над созданием 3D визуализации скейтпарка</h2>

<p>В данном проекте была разработана детальная 3D визуализация современного скейтпарка. 
Особое внимание было уделено реалистичности освещения и материалов.</p>
</div>

<div class="gallery">
  <figure>
    <img src="/assets\img\skatepark/1.jpg" alt="Общий вид скейтпарка" class="zoomable" onclick="openModal(this)">
    <figcaption>Общий вид скейтпарка</figcaption>
  </figure>

  <figure>
    <img src="/assets\img\skatepark/2.jpg" alt="Рампа и перила" class="zoomable" onclick="openModal(this)">
    <figcaption>Рампа и перила</figcaption>
  </figure>

  <figure>
    <img src="/assets\img\skatepark/3.jpg" alt="Зона для трюков" class="zoomable" onclick="openModal(this)">
    <figcaption>Зона для трюков</figcaption>
  </figure>

  <figure>
    <img src="/assets\img\skatepark/4.jpg" alt="Детали конструкции" class="zoomable" onclick="openModal(this)">
    <figcaption>Детали конструкции</figcaption>
  </figure>

  <figure>
    <img src="/assets\img\skatepark/5.jpg" alt="Вечернее освещение" class="zoomable" onclick="openModal(this)">
    <figcaption>Вечернее освещение</figcaption>
  </figure>

  <figure>
    <img src="/assets\img\skatepark/6.jpg" alt="Общий план территории" class="zoomable" onclick="openModal(this)">
    <figcaption>Общий план территории</figcaption>
  </figure>
</div>

<!-- Модальное окно для увеличенного изображения -->
<div id="imageModal" class="modal">
  <span class="close" onclick="closeModal()">&times;</span>
  <img class="modal-content" id="modalImage">
</div>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.gallery figure {
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.gallery figure:hover {
  transform: translateY(-5px);
}

.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.gallery figcaption {
  padding: 10px;
  text-align: center;
  background: var(--background-color);
  font-size: 0.9em;
  color: var(--text-color);
  border-top: 1px solid rgba(0,0,0,0.1);
}
</style>

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
