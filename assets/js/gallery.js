// Создаем модальное окно при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="gallery-modal__container">
            <div class="gallery-modal__header">
                <button class="gallery-modal__close">&times;</button>
            </div>
            <div class="gallery-modal__content">
                <img class="gallery-modal__image" id="modal-img">
            </div>
            <div class="gallery-modal__controls">
                <button class="gallery-modal__btn gallery-modal__btn--zoom-in" title="Увеличить">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                </button>
                <button class="gallery-modal__btn gallery-modal__btn--zoom-out" title="Уменьшить">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M19 13H5v-2h14v2z"/>
                    </svg>
                </button>
                <button class="gallery-modal__btn gallery-modal__btn--reset" title="Сбросить">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Получаем элементы
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.gallery-modal__close');
    const zoomInBtn = document.querySelector('.gallery-modal__btn--zoom-in');
    const zoomOutBtn = document.querySelector('.gallery-modal__btn--zoom-out');
    const resetBtn = document.querySelector('.gallery-modal__btn--reset');

    // Переменные для зума
    let scale = 1;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;

    // Делаем функции глобально доступными
    window.openModal = function(img) {
        modal.classList.add('gallery-modal--active');
        modalImg.src = img.src;
        document.body.style.overflow = 'hidden';
        resetZoom();
    };

    window.closeModal = function() {
        modal.classList.remove('gallery-modal--active');
        document.body.style.overflow = 'auto';
        resetZoom();
    };

    // Функция обновления трансформации изображения
    function updateImageTransform() {
        modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    // Функция сброса зума
    function resetZoom() {
        scale = 1;
        translateX = 0;
        translateY = 0;
        updateImageTransform();
    }

    // Обработчики кнопок зума
    zoomInBtn.addEventListener('click', () => {
        scale = Math.min(scale * 1.2, 4);
        updateImageTransform();
    });

    zoomOutBtn.addEventListener('click', () => {
        scale = Math.max(scale / 1.2, 1);
        updateImageTransform();
    });

    resetBtn.addEventListener('click', resetZoom);

    // Обработчик колесика мыши для зума
    modalImg.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY;
        
        if (delta < 0) {
            scale = Math.min(scale * 1.1, 4);
        } else {
            scale = Math.max(scale / 1.1, 1);
        }
        
        updateImageTransform();
    });

    // Обработчики для перетаскивания изображения
    modalImg.addEventListener('mousedown', (e) => {
        if (scale > 1) {
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            modalImg.style.cursor = 'grabbing';
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateImageTransform();
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        modalImg.style.cursor = 'grab';
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('gallery-modal--active')) {
            closeModal();
        }
    });
});

// Добавляем стили
const style = document.createElement('style');
style.textContent = `
    .gallery-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .gallery-modal--active {
        display: flex;
        opacity: 1;
    }

    .gallery-modal__container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .gallery-modal__header {
        position: absolute;
        top: 0;
        right: 0;
        padding: 20px;
        z-index: 2;
    }

    .gallery-modal__close {
        background: none;
        border: none;
        color: white;
        font-size: 32px;
        cursor: pointer;
        padding: 5px;
        line-height: 1;
        opacity: 0.8;
        transition: opacity 0.3s;
    }

    .gallery-modal__close:hover {
        opacity: 1;
    }

    .gallery-modal__content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        overflow: hidden;
    }

    .gallery-modal__image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        cursor: grab;
        transition: transform 0.1s ease;
        transform-origin: center center;
    }

    .gallery-modal__controls {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 15px;
        background: rgba(0, 0, 0, 0.5);
        padding: 10px;
        border-radius: 30px;
        backdrop-filter: blur(5px);
        z-index: 2;
    }

    .gallery-modal__btn {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
    }

    .gallery-modal__btn svg {
        fill: currentColor;
    }

    .gallery-modal__btn:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        .gallery-modal__controls {
            bottom: 10px;
            gap: 10px;
        }

        .gallery-modal__btn {
            width: 35px;
            height: 35px;
        }

        .gallery-modal__btn svg {
            width: 20px;
            height: 20px;
        }

        .gallery-modal__close {
            font-size: 28px;
        }
    }

    @media (max-width: 480px) {
        .gallery-modal__controls {
            bottom: 5px;
            gap: 8px;
        }

        .gallery-modal__btn {
            width: 30px;
            height: 30px;
        }

        .gallery-modal__btn svg {
            width: 16px;
            height: 16px;
        }
    }
`;
document.head.appendChild(style);