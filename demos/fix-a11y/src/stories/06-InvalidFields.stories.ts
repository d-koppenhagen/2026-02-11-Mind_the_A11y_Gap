export default {
  title: '06 - Invalid Form Fields',
  parameters: {
    layout: 'centered',
  },
};

export const Bad = () => /* html */`
  <form>
    <div>
      <label for="email-bad" style="display: block; margin-bottom: 0.25rem; font-weight: bold;">Email</label>
      <input type="email" id="email-bad" class="error" style="padding: 0.5rem; width: 100%; border: 2px solid red;" />
      <span class="error-text" style="color: red; font-size: 0.875rem;">Invalid email</span>
    </div>
    <button type="submit" style="padding: 0.5rem; background: blue; color: white; border: none; cursor: pointer;">Submit</button>
  </form>
`;

export const Good = () => /* html */`
  <form>
    <div>
      <label for="email-good" style="display: block; margin-bottom: 0.25rem; font-weight: bold;">Email</label>
      <input
        type="email"
        id="email-good"
        aria-invalid="true"
        aria-errormessage="email-error"
        style="padding: 0.5rem; width: 100%; border: 2px solid red;"
      />
      <span id="email-error" role="alert" style="color: red; font-size: 0.875rem;">Invalid email</span>
    </div>
    <button type="submit" style="padding: 0.5rem; background: blue; color: white; border: none; cursor: pointer;">Submit</button>
  </form>
`;
