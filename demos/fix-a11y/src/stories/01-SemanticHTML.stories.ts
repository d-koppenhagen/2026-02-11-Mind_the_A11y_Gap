export default {
  title: '01 - Semantic HTML',
  parameters: {
    layout: 'padded',
  },
};

export const Bad = () => /* html */`
  <div class="header">
    <div class="brand">My App</div>
    <div class="nav">
      <div class="nav-link" onclick="alert('Home')">Home</div>
      <div class="nav-link" onclick="alert('Products')">Products</div>
    </div>
  </div>
  <div class="content">
    <div class="title">Welcome</div>
    <div class="form">
      <label>Enter your name</label>
      <input type="text" placeholder="Enter your name" />
      <div class="button" onclick="alert('Submit')">Submit</div>
    </div>
  </div>
`;

export const Good = () => /* html */`
  <header>
    <h1>My App</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#products">Products</a>
    </nav>
  </header>
  <main>
    <h2>Welcome</h2>
    <form>
      <label for="name">Enter your name</label>
      <input type="text" id="name" placeholder="e. g. John Doe" />
      <button type="submit">Submit</button>
    </form>
  </main>
`;
