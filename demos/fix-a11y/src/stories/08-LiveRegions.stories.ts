export default {
  title: '08 - Live Regions',
  parameters: {
    layout: 'centered',
  },
};

export const Bad = () => {
  const showNotification = () => {
    const div = document.createElement('div');
    div.setAttribute('aria-live', 'polite');
    div.textContent = 'Item added to cart!';
    div.className  = 'notification';
    document.querySelector('#bad-container')?.appendChild(div);
  };

  setTimeout(() => {
    const btn = document.querySelector('#bad-notify-btn');
    if (btn) btn.addEventListener('click', showNotification);
  }, 0);

  return /* html */`
    <div id="bad-container">
      <button id="bad-notify-btn">
        Add to Cart
      </button>
    </div>
  `;
};

export const Good = () => {
  const announce = () => {
    const announcer = document.getElementById('announcer');
    if (announcer) {
      announcer.textContent = 'Item added to cart!';

      const notification = document.createElement('div');
      notification.textContent = 'Item added to cart!';
      notification.className  = 'notification';
      document.querySelector('#good-container')?.appendChild(notification);
    }
  };

  setTimeout(() => {
    const btn = document.querySelector('#good-notify-btn');
    if (btn) btn.addEventListener('click', announce);
  }, 0);

  return /* html */`
    <div id="good-container">
      <div id="announcer" class="sr-only" aria-live="polite" aria-atomic="true" style="position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;"></div>
      <button id="good-notify-btn">
        Add to Cart
      </button>
    </div>
  `;
};
