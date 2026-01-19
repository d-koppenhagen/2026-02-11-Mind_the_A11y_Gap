export default {
  title: '04 - Form Labels',
  parameters: {
    layout: 'centered',
  },
};

export const Bad = () => /* html */`
  <form>
    <input type="text" placeholder="Enter your email" />

    <div class="label">
      <input type="checkbox" />
      <span>Accept terms</span>
    </div>

    <button type="submit">Submit</button>
  </form>
`;

export const Good = () => /* html */`
  <form>
    <div>
      <label for="email">Enter your email</label>
      <input type="text" id="email" />
    </div>

    <label>
      <input type="checkbox" />
      <span>Accept terms</span>
    </label>

    <button type="submit">Submit</button>
  </form>
`;
