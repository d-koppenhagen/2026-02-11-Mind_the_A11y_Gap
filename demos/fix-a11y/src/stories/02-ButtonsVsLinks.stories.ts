export default {
  title: '02 - Buttons vs Links',
  parameters: {
    layout: 'centered',
  },
};

export const Bad = () => /* html */`
  <div class="stacked">
    <div class="button" onclick="alert('Saved!')">
      Save
    </div>
    <button type="button" onclick="window.location.href='#products'">
      Go to Products
    </button>
  </div>
`;

export const Good = () => /* html */`
  <div class="stacked">
    <button type="button" onclick="alert('Saved!')">
      Save
    </button>
    <a class="button" href="#products">
      Go to Products
    </a>
  </div>
`;
