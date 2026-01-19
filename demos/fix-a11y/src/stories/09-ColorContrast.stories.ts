export default {
  title: '09 - Color Contrast',
  parameters: {
    layout: 'centered',
  },
};

export const Bad = () => /* html */`
  <div style="max-width: 400px;">
    <div style="padding: 1rem; color: #999999; background: #FFFFFF; border: 1px solid #ccc;">
      <h3 style="margin: 0 0 0.5rem 0; color: #999999;">Low Contrast Text</h3>
      <p style="margin: 0;">This text is hard to read because it has a contrast ratio of only 2.85:1, which fails WCAG AA standards.</p>
    </div>
  </div>
`;

export const Good = () => /* html */`
  <div style="max-width: 400px;">
    <div style="padding: 1rem; color: #595959; background: #FFFFFF; border: 1px solid #ccc;">
      <h3 style="margin: 0 0 0.5rem 0; color: #595959;">Good Contrast Text</h3>
      <p style="margin: 0;">This text is easy to read because it has a contrast ratio of 7:1, which passes WCAG AAA standards.</p>
    </div>
  </div>
`;
