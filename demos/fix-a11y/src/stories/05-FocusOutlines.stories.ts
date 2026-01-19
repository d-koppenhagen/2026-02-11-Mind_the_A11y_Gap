export default {
  title: '05 - Focus Outlines',
  parameters: {
    layout: 'centered',
  },
};

export const Bad = () => /* html */`
  <div class="row">
    <button style="outline: none;">Button 1</button>
    <button style="outline: none;">Button 2</button>
    <button style="outline: none;">Button 3</button>
  </div>
`;

export const Good = () => /* html */`
  <div class="row">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
  </div>
`;
