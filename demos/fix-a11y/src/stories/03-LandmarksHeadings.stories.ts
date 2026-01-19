export default {
  title: '03 - Landmarks & Headings',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Bad = () => /* html */`
  <div class="page">
    <div class="header">
      <div class="brand">Brand</div>
    </div>
    <div class="sidebar">Sidebar Content</div>
    <div class="content">
      <div class="title">Featured</div>
      <p>Some product content here...</p>
    </div>
    <div class="footer">Footer Content</div>
  </div>
`;

export const Good = () => /* html */`
  <div class="page">
    <header>
      <h1>Brand</h1>
    </header>
    <aside>Sidebar Content</aside>
    <main>
      <h2>Featured</h2>
      <p>Some product content here...</p>
    </main>
    <footer>Footer Content</footer>
  </div>
`;
