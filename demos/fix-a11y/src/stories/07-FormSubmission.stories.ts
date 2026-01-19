export default {
  title: '07 - Form Submission',
  parameters: {
    layout: 'centered',
  },
};

export const Bad_DisabledWithoutExplanation = () => /* html */`
  <form>
    <div>
      <label for="name-bad1">Name</label>
      <input type="text" id="name-bad1" />
    </div>
    <button type="submit" disabled>
      Submit
    </button>
  </form>
`;

export const Bad_DisabledWithHint = () => /* html */`
  <form>
    <div>
      <label for="name-bad2">Name</label>
      <input type="text" id="name-bad2" />
    </div>
    <button type="submit" disabled aria-describedby="submit-hint">
      Submit
    </button>
    <small id="submit-hint">Please fill all required fields</small>
  </form>
`;

export const Good = () => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;

    if (!input.value) {
      input.setAttribute('aria-invalid', 'true');
      const error = form.querySelector('#name-error');
      if (error) error.textContent = 'Please enter your name';
      input.focus();
    } else {
      alert('Form submitted!');
    }
  };

  setTimeout(() => {
    const form = document.querySelector('#good-form');
    if (form) form.addEventListener('submit', handleSubmit);
  }, 0);

  return /* html */`
    <form id="good-form">
      <div>
        <label for="name-good">Name</label>
        <input type="text" id="name-good" aria-errormessage="name-error" />
        <div id="name-error" role="alert"></div>
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  `;
};
