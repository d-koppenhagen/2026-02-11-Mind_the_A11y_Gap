export default {
  title: '11 - Form Demo',
  parameters: {
    layout: 'centered',
  },
};

export const Bad = () => {
  const validateField = (input: HTMLInputElement, errorId: string, errorMsg: string) => {
    const error = document.getElementById(errorId);
    if (!input.value && input.required) {
      if (error) error.textContent = errorMsg;
      return false;
    } else {
      if (error) error.textContent = '';
      return true;
    }
  };

  const updateButtonState = (form: HTMLFormElement) => {
    const email = form.querySelector('#email-bad') as HTMLInputElement;
    const firstname = form.querySelector('#firstname-bad') as HTMLInputElement;
    const lastname = form.querySelector('#lastname-bad') as HTMLInputElement;
    const button = form.querySelector('button') as HTMLButtonElement;

    const isValid = email.value && firstname.value && lastname.value;
    button.disabled = !isValid;
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.querySelector('#email-bad') as HTMLInputElement;
    const firstname = form.querySelector('#firstname-bad') as HTMLInputElement;
    const lastname = form.querySelector('#lastname-bad') as HTMLInputElement;

    const isEmailValid = validateField(email, 'email-error-bad', 'Please enter your email');
    const isFirstnameValid = validateField(firstname, 'firstname-error-bad', 'Please enter your first name');
    const isLastnameValid = validateField(lastname, 'lastname-error-bad', 'Please enter your last name');

    if (isEmailValid && isFirstnameValid && isLastnameValid) {
      const toast = document.createElement('div');
      toast.textContent = 'Form submitted successfully!';
      toast.style.cssText = 'position: fixed; top: 1rem; right: 1rem; padding: 1rem; background: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px; z-index: 1000;';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    }
  };

  setTimeout(() => {
    const form = document.querySelector('#bad-form');
    if (form) {
      form.addEventListener('submit', handleSubmit);

      ['email-bad', 'firstname-bad', 'lastname-bad', 'username-bad'].forEach(id => {
        const input = document.getElementById(id) as HTMLInputElement;
        if (input) {
          input.addEventListener('input', () => updateButtonState(form as HTMLFormElement));
          input.addEventListener('blur', () => {
            if (input.required) {
              const errorId = id.replace('-bad', '-error-bad');
              const errorMsg = `Please enter your ${id.replace('-bad', '').replace('name', ' name')}`;
              validateField(input, errorId, errorMsg);
            }
          });
        }
      });
    }
  }, 0);

  return /* html */`
    <form id="bad-form" novalidate>
      <div>
        <label>Email</label>
        <input type="email" id="email-bad" required />
        <small id="email-error-bad" class="error"></small>
      </div>
      <div>
        <label>Username (optional)</label>
        <input type="text" id="username-bad" />
        <small>When not entered, the e-mail is used.</small>
      </div>
      <div>
        <label>First Name</label>
        <input type="text" id="firstname-bad" required />
        <small id="firstname-error-bad" class="error"></small>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" id="lastname-bad" required />
        <small id="lastname-error-bad" class="error"></small>
      </div>
      <button type="submit" disabled>
        Submit
      </button>
      <small>Please fill all required fields</small>
    </form>
  `;
};

export const Good = () => {
  const validateField = (input: HTMLInputElement, errorId: string, errorMsg: string) => {
    const error = document.getElementById(errorId);
    if (!input.value && input.required) {
      input.setAttribute('aria-invalid', 'true');
      if (error) error.textContent = errorMsg;
      return false;
    } else {
      input.removeAttribute('aria-invalid');
      if (error) error.textContent = '';
      return true;
    }
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.querySelector('#email-good') as HTMLInputElement;
    const firstname = form.querySelector('#firstname-good') as HTMLInputElement;
    const lastname = form.querySelector('#lastname-good') as HTMLInputElement;

    const isEmailValid = validateField(email, 'email-error', 'Please enter your email');
    const isFirstnameValid = validateField(firstname, 'firstname-error', 'Please enter your first name');
    const isLastnameValid = validateField(lastname, 'lastname-error', 'Please enter your last name');

    if (isEmailValid && isFirstnameValid && isLastnameValid) {
      const announcer = document.getElementById('announcer');
      if (announcer) announcer.textContent = 'Form submitted successfully!';

      const toast = document.createElement('div');
      toast.textContent = 'Form submitted successfully!';
      toast.style.cssText = 'position: fixed; top: 1rem; right: 1rem; padding: 1rem; background: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px; z-index: 1000;';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);

      const hint = document.getElementById('submit-hint');
      if (hint) hint.innerHTML = 'Please fill all required fields';
    } else {
      const invalidFields = [];
      if (!isEmailValid) invalidFields.push({ id: 'email-good', label: 'Email' });
      if (!isFirstnameValid) invalidFields.push({ id: 'firstname-good', label: 'First Name' });
      if (!isLastnameValid) invalidFields.push({ id: 'lastname-good', label: 'Last Name' });

      const hint = document.getElementById('submit-hint');
      if (hint) {
        hint.innerHTML = 'Please fix the following fields: ' +
          invalidFields.map(f => `<a href="#${f.id}">${f.label}</a>`).join(', ');
      }

      if (!isEmailValid) email.focus();
      else if (!isFirstnameValid) firstname.focus();
      else if (!isLastnameValid) lastname.focus();
    }
  };

  setTimeout(() => {
    const form = document.querySelector('#good-form');
    if (form) {
      form.addEventListener('submit', handleSubmit);

      ['email-good', 'firstname-good', 'lastname-good'].forEach(id => {
        const input = document.getElementById(id) as HTMLInputElement;
        if (input) {
          input.addEventListener('blur', () => {
            const errorId = id.replace('-good', '-error');
            const errorMsg = `Please enter your ${id.replace('-good', '').replace('name', ' name')}`;
            validateField(input, errorId, errorMsg);
          });
        }
      });
    }
  }, 0);

  return /* html */`
    <div id="announcer" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>
    <form id="good-form" novalidate>
      <div>
        <label for="email-good">Email</label>
        <input type="email" id="email-good" required aria-errormessage="email-error" />
        <small id="email-error" role="alert"></small>
      </div>
      <div>
        <label for="username-good">Username (optional)</label>
        <input type="text" id="username-good" aria-describedby="username-info" />
        <small id="username-info">When not entered, the e-mail is used.</small>
      </div>
      <div>
        <label for="firstname-good">First Name</label>
        <input type="text" id="firstname-good" required aria-errormessage="firstname-error" />
        <small id="firstname-error" role="alert"></small>
      </div>
      <div>
        <label for="lastname-good">Last Name</label>
        <input type="text" id="lastname-good" required aria-errormessage="lastname-error" />
        <small id="lastname-error" role="alert"></small>
      </div>
      <button type="submit">
        Submit
      </button>
      <small id="submit-hint" role="status" aria-live="polite">Please fill all required fields</small>
    </form>
  `;
};
