export default {
  title: '06 - Invalid Form Fields',
  parameters: {
    layout: 'centered',
  },
};

export const Bad = () => /* html */`
  <form>
    <div>
      <label for="email-bad">Email</label>
      <input type="email" id="email-bad" class="error" />
      <small class="error">No valid email was entered</small>
    </div>
    <button type="submit">Submit</button>
  </form>
`;

export const Good = () => /* html */`
  <form>
    <div>
      <label for="email-good">Email</label>
      <input
        type="email"
        id="email-good"
        aria-invalid="true"
        aria-errormessage="email-error"
      />
      <small id="email-error" role="alert">No valid email was entered</small>
    </div>
    <button type="submit">Submit</button>
  </form>
`;
