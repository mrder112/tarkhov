// Создаем контейнер для браузеров
const browserContainer = document.createElement('div');
browserContainer.className = 'browser-preview';
browserContainer.innerHTML = `
  <div class="browser-preview__container">
    <div class="browser-preview__desktop">
      <div class="browser-preview__header">
        <div class="browser-preview__controls">
          <span class="browser-preview__dot"></span>
          <span class="browser-preview__dot"></span>
          <span class="browser-preview__dot"></span>
        </div>
        <div class="browser-preview__url">https://xn--80aanbejnfwbjyfv.xn--p1ai/</div>
      </div>
      <div class="browser-preview__content">
        <iframe src="https://xn--80aanbejnfwbjyfv.xn--p1ai/" frameborder="0"></iframe>
      </div>
    </div>
    
    <div class="browser-preview__mobile">
      <div class="browser-preview__header">
        <div class="browser-preview__notch"></div>
      </div>
      <div class="browser-preview__content">
        <iframe src="https://xn--80aanbejnfwbjyfv.xn--p1ai/" frameborder="0"></iframe>
      </div>
    </div>
  </div>
`;

// Добавляем стили
const style = document.createElement('style');
style.textContent = `
  .browser-preview {
    padding: 40px 0;
    margin: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .browser-preview__container {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
  }

  .browser-preview__desktop {
    width: 85%;
    min-width: 1000px;
    max-width: 1400px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    height: 700px;
    position: relative;
  }

  .browser-preview__mobile {
    width: 320px;
    height: 640px;
    background: white;
    border-radius: 32px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
  }

  .browser-preview__header {
    background: #f1f1f1;
    padding: 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }

  .browser-preview__controls {
    display: flex;
    gap: 8px;
    margin-right: 12px;
  }

  .browser-preview__dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ddd;
  }

  .browser-preview__dot:nth-child(1) { background: #ff5f57; }
  .browser-preview__dot:nth-child(2) { background: #febc2e; }
  .browser-preview__dot:nth-child(3) { background: #28c840; }

  .browser-preview__url {
    flex: 1;
    background: white;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 13px;
    color: #666;
    text-align: center;
    margin: 0 12px;
  }

  .browser-preview__notch {
    width: 140px;
    height: 24px;
    background: #000;
    border-radius: 0 0 16px 16px;
    margin: 0 auto;
  }

  .browser-preview__content {
    width: 100%;
    height: calc(100% - 45px);
    overflow: hidden;
  }

  .browser-preview__content iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 1600px) {
    .browser-preview__desktop {
      min-width: 800px;
    }
  }

  @media (max-width: 1200px) {
    .browser-preview__container {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    .browser-preview__desktop {
      width: 100%;
      min-width: 100%;
      height: 600px;
    }

    .browser-preview__mobile {
      width: 280px;
      height: 560px;
    }
  }

  @media (max-width: 768px) {
    .browser-preview {
      padding: 20px 0;
    }

    .browser-preview__container {
      padding: 0 10px;
    }

    .browser-preview__desktop {
      height: 500px;
    }

    .browser-preview__mobile {
      width: 240px;
      height: 480px;
    }
  }
`;

// Функция для добавления компонента на страницу
function addBrowserPreview(container) {
  container.appendChild(style);
  container.appendChild(browserContainer);
}

// Экспортируем функцию
window.addBrowserPreview = addBrowserPreview; 