---
theme: the-unnamed
title: Mind the A11y Gap - Bridging Accessibility Pitfalls
info: |
  ## Mind the A11y Gap: Bridging Accessibility Pitfalls

  Accessibility isn't just a nice-to-have—it's essential for creating digital experiences that work for everyone.

  By Danny Koppenhagen
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
duration: 45min
css: unocss
---

<style src="./style.css"></style>

# Mind the A11y Gap
## Bridging Accessibility Pitfalls

<div class="abs-br m-6 flex gap-2">
  <a href="https://k9n.dev" target="_blank" alt="Website" title="Website"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-earth />
  </a>
  <a href="https://github.com/d-koppenhagen" target="_blank" alt="GitHub" title="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="https://bsky.app/profile/k9n.dev" target="_blank" alt="BlueSky" title="BlueSky"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-bluesky />
  </a>
</div>

<!--
Welcome everyone to "Mind the A11y Gap"!

Today we'll explore the most common accessibility pitfalls in modern web applications and learn how to avoid them.

This talk is about practical, framework-agnostic solutions that you can apply immediately.
-->

---
layout: center
---

# About Me

<div class="flex items-center gap-8 m-t-12">
  <img src="/danny.jpeg" class="w-48 h-48 rounded-full mr-6" alt="Danny Koppenhagen" />
  <div class="leading-8 opacity-80">
    Danny Koppenhagen<br>
    Frontend Architect @ DB Systel GmbH<br>
    <br>
    🚂 Building large-scale web apps for Deutsche Bahn<br>
    ♿ Passionate about accessibility & inclusive design<br>
    📚 Co-author of German Angular book<br>
    🌐 k9n.dev<br>
  </div>
</div>

<!--
Quick intro about myself:
- I'm Danny, Frontend Architect at DB Systel
- I work on large-scale web applications for Deutsche Bahn
- Passionate about making the web accessible for everyone
- I believe good software should be robust, scalable, AND inclusive
-->

---
layout: default
---

# Why Accessibility Matters

<div class="text-xl pt-4">

- 🌍 **15% of the world's population** has some form of disability
- 📱 **Everyone benefits** - temporary injuries, situational limitations
- ⚖️ **It's the law** - EAA, BFSG, WCAG compliance required (June 2025)
- 💼 **Business value** - larger audience, better SEO, improved UX for all

</div>

<v-click>

<div class="text-xl mt-8 p-4 bg-blue-500 bg-opacity-10 rounded">
💡 Accessibility isn't just a nice-to-have—it's essential
</div>

</v-click>

<!--
Why should we care about accessibility?

1. 15% of people worldwide have some form of disability - that's over 1 billion people
2. But it's not just about permanent disabilities - think about:
   - Broken arm (temporary)
   - Holding a baby (situational)
   - Bright sunlight on your screen (environmental)
3. Legal requirements: European Accessibility Act, German BFSG - compliance is mandatory from June 2025
4. Business case: Larger audience, better SEO, and honestly - accessible apps are just better for everyone

Bottom line: Accessibility is essential, not optional.

Now let's look at what typically goes wrong...
-->

---
layout: section
---

# The Gap: Common Pitfalls

What goes wrong and why?

<!--
Let's talk about "The Gap" - the space between what we intend to build and what we actually deliver in terms of accessibility.

I'm going to show you some real-world examples of common mistakes.

For each one, I want you to think: "Can I spot the issue?"
-->


---
layout: default
---

# Code Review: Spot the Issues

<div class="grid grid-cols-5 gap-4">

<div class="col-span-3">

```html {all|2|3|5|10|11|12|all}
<div class="header">
  <div class="headline">My App</div>
  <div class="nav">
    <div onclick="goToHome()">Home</div>
    <div onclick="goToProducts()">Products</div>
  </div>
</div>
<div class="content">
  <div class="title">Welcome</div>
  <div class="form">
    <input type="text" placeholder="Enter your name" />
    <div class="button" onclick="submit()">Submit</div>
  </div>
</div>
```

<v-click>

<div class="mt-4 p-4 bg-red-500 bg-opacity-10 rounded">
❌ This code has at least 7 accessibility issues!
</div>

</v-click>

</div>

<div class="col-span-2">
  <div class="w-95% ml-5 text-right">
    <img src="/a11y_dept_everywhere.jpg" attributionsrc="https://i.imgflip.com/ahxlzv.jpg" title="made at imgflip.com" class="mt-7"/>
  </div>
</div>

</div>



<!--
Let's do a code review together. This is actual code I've seen in production.

[CLICK through highlights]
- Line 2: "headline" as a div - no semantic heading
- Line 3: "nav" - a div, not a nav element
- Line 5: Clickable divs instead of buttons or links
- Line 10: A form built entirely with divs
- And more...

[FINAL CLICK]
This code has at least 7 major accessibility issues!

Can anyone spot some of them?
[PAUSE for audience interaction]

Let's break down what's wrong and how to fix it...
-->

---
layout: default
transition: slide-up
---

# What's Wrong?

<v-clicks>

1. ❌ No semantic HTML - everything is a `<div>`
2. ❌ No landmarks (`<header>`, `<nav>`, `<main>`)
3. ❌ Clickable divs instead of `<button>` or `<a>`
4. ❌ No heading structure (`<h1>`, `<h2>`, etc.)
5. ❌ Missing form labels
6. ❌ Placeholder as label (bad practice!)
7. ❌ No keyboard support (onclick on divs)

</v-clicks>

<v-click>

<div class="mt-2 p-4 bg-yellow-500 bg-opacity-10 rounded">
⚠️ Screen readers can't understand this structure<br>
⚠️ Keyboard users can't navigate<br>
⚠️ Search engines struggle to index it
</div>

</v-click>

<!--
Here's what's wrong with that code:

[GO THROUGH EACH POINT]

The result?
- Screen readers just see a flat list of text - no structure, no navigation
- Keyboard users can't tab through the page
- Even search engines have trouble understanding what's important

This is what I call "div soup" - and it's surprisingly common.

Now let's see how to fix it properly...
-->


---
layout: section
---

# Semantic HTML: The Foundation

Using the right elements for the job

<!--
The foundation of accessibility is semantic HTML.

HTML5 gives us powerful elements that come with built-in accessibility features.

We just need to use them!

Let's look at the same example, but done right...
-->


---
layout: default
transition: slide-up
---

# The Fix: Semantic HTML

```html {all|1|2|3-6|9|10|11-12|13|all}
<header>
  <h1>My App</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/products">Products</a>
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
```

<v-click>

<div class="mt-2 p-4 bg-green-500 bg-opacity-10 rounded">
✅ Semantic structure, keyboard accessible, screen reader friendly!
</div>

</v-click>

<!--
Here's the same functionality, but done right:

[CLICK through highlights]
- Line 1: Proper header landmark
- Line 2: H1 for the main heading
- Lines 3-6: Nav landmark with actual links
- Line 9: Main landmark for primary content
- Line 10: H2 for section heading (proper hierarchy)
- Lines 11-12: Label properly associated with input
- Button is a real button

[FINAL CLICK]
Now we have:
- Clear structure for screen readers
- Full keyboard support (links and buttons are focusable)
- Proper semantics for search engines
- And we didn't need any ARIA attributes!

Let's dive deeper into specific patterns...
-->


---
layout: default
---

# Landmarks & Headings

<div class="grid grid-cols-8 gap-4">

<div class="col-span-3">

### ❌ Problem

```html
<div class="header">...</div>
<div class="sidebar">...</div>
<div class="content">
  <div class="title">Featured</div>
</div>
<div class="footer">...</div>
```

</div>

<div class="col-span-2">

### ✅ Solution

```html
<header>...</header>
<aside>...</aside>
<main>
  <h2>Featured</h2>
</main>
<footer>...</footer>
```

</div>

<div class="col-span-3">
  <div class="w-95% ml-5 text-right">
    <img src="/landmarks.png" alt="" class=""/>
  </div>
</div>

</div>

<v-click>

<div class="mt-4 p-4 bg-blue-500 bg-opacity-10 rounded">
💡 Landmarks create a navigable structure. Screen reader users can jump between them!
</div>

</v-click>

<!--
Landmarks and headings create the navigable structure of your page.

LEFT - Problem:
All divs with classes. Screen readers see no structure.

RIGHT - Solution:
Proper landmarks: header, aside, main, footer
Proper heading hierarchy: h1 for page title, h2 for sections

[CLICK]
Why this matters:
Screen reader users can press a key to jump between landmarks or headings.
It's like a table of contents for your page!

Without this, they have to listen to EVERYTHING linearly.

Important: Heading hierarchy must be correct - never skip levels!
-->

---
layout: default
---

# Skip Links

<div class="grid grid-cols-2 gap-4">

<div>

```html
<body>
  <a href="#main" class="skip-link">
    Skip to main content
  </a>
  <header>...</header>
  <nav>...</nav>
  <main id="main" tabindex="-1">
    <!-- Main content -->
  </main>
</body>
```

</div>

<div>

```css
.skip-link:not(:focus, :focus-within) {
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
```

</div>

</div>

<v-clicks>

- **Complement to landmarks** - not a replacement (Screen readers already have landmark navigation)!
- Useful for **keyboard users** to bypass long navigation
- Consider when you have **many nav items** before main content

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-500 bg-opacity-10 rounded">
⚠️ Use with care: If you have proper landmarks, skip links are a UX enhancement, not a requirement.
</div>

</v-click>

<!--
Skip links allow keyboard users to jump directly to main content.

But here's the thing: If you have proper landmarks, screen reader users can already navigate with shortcuts.

Skip links are primarily for sighted keyboard users who can't use landmark navigation.

Use them when:
- You have a lot of navigation items
- Your header is complex with many interactive elements

Don't rely on skip links as a substitute for proper landmarks!
-->

---
layout: default
---

# Buttons vs Links

<div class="grid grid-cols-3 gap-4">

<div>

### ❌ Problem

```html
<div onclick="save()">
  Save
</div>

<button onclick="navigate()">
  Go to Products
</button>
```

<v-click>

**Issues:**
- Div not keyboard accessible
- Button used for navigation
- No semantic meaning

</v-click>

</div>

<div>

<v-click>

### ✅ Solution

```html
<button onclick="save()">
  Save
</button>

<a href="/products">
  Go to Products
</a>
```

**Rule:**
- `<button>` for actions
- `<a>` for navigation

</v-click>

</div>

<div class="w-95% ml-5 text-right">
  <img src="https://i.imgflip.com/ahxldt.jpg" attributionsrc="https://i.imgflip.com/ahxldt.jpg" title="made at imgflip.com" class="mt--10"/>
</div>

</div>

<!--
One of the most common mistakes: confusing buttons and links.

LEFT SIDE - The Problem:
- Div with onclick: Not keyboard accessible, no semantic meaning
- Button for navigation: Wrong element for the job

[CLICK]
Issues: Screen readers don't know what these do, keyboard users can't reach the div

RIGHT SIDE:
[CLICK]
The solution is simple:
- Use button for actions (save, submit, toggle)
- Use anchor for navigation (going to another page)

This simple rule solves so many problems!
-->

---
layout: section
---

# Keyboard Navigation & Focus

Making your app usable without a mouse

<!--
Not everyone uses a mouse. Some people navigate entirely with keyboard.

This is where many modern web apps fall apart.

Let's look at the most common issues...
-->


---
layout: default
---

# Focus Outlines: Never Remove Them!

<div class="grid grid-cols-2 gap-4">

<div>

### ❌ Problem

```css
* {
  outline: none;
}


button:focus {
  outline: 0;
}
```

<v-click>

**Result:**
- No visible focus indicator
- Keyboard users are lost
- "Where am I on the page?"

</v-click>

</div>

<div>

<v-click>

### ✅ Solution

```css
button:focus-visible { /* customize */
  outline: 2px solid blue;
  outline-offset: 2px;
}

button:focus-visible { /* alternative */
  box-shadow: 0 0 0 3px rgba(0, 30, 50, 0.5);
}
```

**Benefits:**
- Clear focus indication
- Keyboard navigation possible
- `:focus-visible` only for keyboard

</v-click>

</div>

</div>

<!--
This is one of the worst things you can do for accessibility.

LEFT - Problem:
Removing outlines completely. I see this ALL THE TIME.
Developers think it looks ugly, so they remove it.

[CLICK]
Result: Keyboard users have no idea where they are on the page.
Imagine tabbing through a form and not knowing which field you're in!

RIGHT:
[CLICK]
Solution:
Keep the default outline, or style it to match your design.
Use focus-visible to only show it for keyboard users, not mouse clicks.

Pro tip: Modern CSS gives you box-shadow for more design flexibility.

Never, ever remove focus indicators completely!
-->

---
layout: center
class: text-center
---

# Demo

<StorybookLink story="01-semantic-html" />

---
layout: default
---

# Lost Focus: The User Experience

<div class="flex justify-center mb--10">
  <img src="/focus-router-wrong.drawio.png" class="w-80%" alt="Comparison of focus behavior in traditional multi-page apps vs SPAs" />
</div>

**Issues:**
- Focus remains on navigation link: Lost focus after navigation
- No announcement of page change, users don't know content updated
- Expectation: Focus at page start or right after navigation

<!--
-->

---
layout: default
---

# SPA Problem: Lost Focus After Navigation

<div class="grid grid-cols-2 gap-4">

<div>

### ❌ Problem

```js
// User clicks "Products" link
router.navigate('/products');
// Page content changes
// But focus stays on the link!
// Screen reader: "Products, link"
// User: "Did anything happen?"
```

<v-click>

**Issues:**
- Lost / wrong focus
- No announcement of page change
- User doesn't know content updated

</v-click>

</div>

<div>

<v-click>

### ✅ Solution

```js
router.navigate('/products'); // After nav

// Move focus to main content
const main = document.querySelector('main');
main.setAttribute('tabindex', '-1');
main.focus();
```

**Benefits:**
- Focus moves to new content
- Screen reader announces new page
- Clear navigation feedback

</v-click>

</div>

</div>

<!--
This is a huge problem in Single Page Applications.

LEFT - Problem:
User clicks a link, content changes, but focus stays on the old link.
Screen reader users hear nothing - they don't know the page changed!

[CLICK]
This is confusing and breaks the expected behavior.

RIGHT:
[CLICK]
Solution:
After navigation, programmatically move focus to the main content area.
Set tabindex="-1" to make it focusable, then call focus().

This gives screen reader users immediate feedback that the page changed.

Alternative: Use a skip link pattern that's always available.

This is one of those SPA-specific issues that's easy to miss!
-->

---
layout: default
---

# Unique Page Titles

<div class="grid grid-cols-2 gap-4">

<div>

### ❌ Problem

```html
<!-- Every page -->
<title>
  My App
</title>
```

<v-click>

**Issues:**
- No context about current page
- Browser tabs all look the same
- Screen readers can't distinguish pages
- Poor SEO

</v-click>

</div>

<div>

<v-click>

### ✅ Solution

```js
function updateTitle(pageName) {
  document.title = `${pageName} - My App`;
}
// "Products - My App", "Imprint - My App"
```

**Benefits:**
- Clear page context
- Distinguishable browser tabs
- Screen reader announces page
- Better SEO

</v-click>

</div>

</div>

<!--
Another common SPA issue: static page titles.

LEFT - Problem:
Every page has the same title: "My App"

[CLICK]
Issues:
- Users can't tell which tab is which
- Screen readers announce the same title for every page
- No context about where you are
- Search engines can't differentiate your pages

RIGHT:
[CLICK]
Solution:
Update the document title on every route change.
Pattern: "Page Name - App Name"

This is such a simple fix but makes a huge difference!

Screen readers announce the title when the page loads.
Users can see which tab is which.
SEO improves.

Win-win-win!

Now let's talk about forms...
-->

---
layout: section
---

# Forms Done Right

Handling errors and validation accessibly

<!--
Forms are where accessibility often breaks down completely.

Error handling is especially problematic.

Let's look at the patterns you need to know...
-->

---
layout: default
dragPos:
  square: 691,32,167,_,-16
---

# Form Labels

<div class="grid grid-cols-2 gap-4">

<div>

### ❌ Problem

```html
<input
  type="text"
  placeholder="Enter your email"
/>

<input type="checkbox" />
<span>Accept terms</span>
```

<v-click>

**Issues:**
- Placeholder is not a label
- Checkbox not associated
- Screen reader: "Edit text, blank"

</v-click>

</div>

<div>

<v-click>

### ✅ Solution

```html
<label for="email">Enter your email</label>
<input type="email" id="email"
  autocomplete="email" />

<label>
  <input type="checkbox" />
  Accept terms
</label>
```

**Benefits:**
- Proper association
- Clickable label
- Screen reader: "Enter your email, edit text"
- `autocomplete` helps users with cognitive disabilities

</v-click>

</div>

</div>

<!--
Form labels are critical but often forgotten.

LEFT - Problem:
Using placeholder as label - very common mistake!
Checkbox with nearby text but no association

[CLICK]
Issues:
- Placeholders disappear when you type
- Screen readers just say "edit text, blank" - no context!
- You can't click the text to focus the input

RIGHT:
[CLICK]
Solution:
Use proper label elements with for/id association
Or wrap the input in the label

Benefits:
- Screen readers announce the label
- You can click the label text to focus
- Labels don't disappear
- It's just better UX for everyone!
-->

---
layout: default
---

# Marking Invalid Fields

<div class="grid grid-cols-2 gap-4">

<div>

### ❌ Problem

```html
<style>
  .error { border: 2px solid red; }
</style>
<label for="email">Email</label>
<input type="email" id="email" class="error" />
<span class="error-text">
  No valid email was entered
</span>
```

<v-click>

**Issues:**
- Only visual indication (color)
- Screen reader doesn't know it's invalid
- Error message not associated

</v-click>

</div>

<div>

<v-click>

### ✅ Solution

```html
<label for="email">Email</label>
<input type="email" id="email" class="error"
  aria-invalid="true"
  aria-errormessage="email-error"
/>
<span id="email-error" role="alert">
  No valid email was entered
</span>
```

**Benefits:**
- Screen reader announces "invalid"
- Error message is read aloud
- Programmatic association

</v-click>

</div>

</div>

<v-click>

<div class="mt-2 p-2 bg-yellow-500 bg-opacity-10 rounded text-sm">
⚠️ Note: `aria-errormessage` has limited browser support. Use `aria-describedby` as fallback for broader compatibility.
</div>

</v-click>

<!--
Form validation is critical for accessibility.

LEFT - Problem:
Only visual indication - red border.
Screen reader users have no idea the field is invalid!

[CLICK]
The error message is just text nearby - not associated with the field.

RIGHT:
[CLICK]
Solution:
Use aria-invalid="true" to mark the field as invalid.
Use aria-errormessage (or aria-describedby as fallback) to associate the error message.
Add role="alert" so the error is announced immediately.

Now screen readers say:
"Email, invalid, edit text. No valid email was entered"

Users know exactly what's wrong!

But there's more...
-->

---
layout: default
---

# Form Submission

How can we handle when users want to submit invalid forms?

<v-clicks>

<div class="mt-4 p-4 bg-red-500 bg-opacity-10 rounded">

### ❌ Disabled Without Explanation

```html
<button type="submit" disabled>Submit</button>
```

**Problem:** Users don't know why the button doesn't work
</div>

<div class="mt-4 p-4 bg-yellow-500 bg-opacity-10 rounded">

### ⚠️ Disabled With Hint

```html
<button type="submit" disabled aria-describedby="submit-hint">Submit</button>
<div id="submit-hint">Please fill all required fields</div>
```

**Problems:** Button not focusable, generic hint, no info about specific errors
</div>

</v-clicks>

---
layout: default
---

# Form Submission

<div class="mt-4 p-4 bg-green-500 bg-opacity-10 rounded">

### ✅ Enabled With Field Validation

```html
<input aria-invalid="true" aria-errormessage="email-error" />
<div id="email-error" role="alert">Please enter a valid email</div>
```
```js
// On submit: Focus first invalid field
document.querySelector('[aria-invalid="true"]')?.focus();
```

**Benefits:** Specific error messages, focus on problem, screen reader compatible
</div>

<!--
Let's compare three approaches to form validation:

[CLICK 1]
Disabled without explanation: Absolutely unacceptable
The button is just gray and does nothing
Users have no idea why

[CLICK 2]
Disabled with hint: Better, but still problematic
- The button cannot be focused with keyboard
- The hint is too generic
- You don't know WHICH fields are the problem
- Screen reader users must find the hint first

[CLICK 3]
The right solution:
- aria-invalid marks the field as invalid
- aria-errormessage links the specific error message
- role="alert" makes the message immediately available to screen readers
- After submit we set focus on the first invalid field
- This way everyone knows immediately where the problem is and what to do
-->

---
layout: default
---

# Focus Management on Errors

<div class="grid grid-cols-2 gap-4">

<div>

### ❌ Problem

```js
function handleSubmit(e) {
  e.preventDefault();
  const errors = validate(formData);
  if (errors.length > 0) {
    // Just show errors
    setErrors(errors);
    // Focus stays on submit button!
  }
}
```

<v-click>

**Issues:**
- User must find the error
- No immediate feedback
- Keyboard users are lost

</v-click>

</div>

<div>

<v-click>

### ✅ Solution

```js
function handleSubmit(e) {
  e.preventDefault();
  const errors = validate(formData);
  if (errors.length > 0) {
    setErrors(errors);
    const firstError = document
      .querySelector('[aria-invalid="true"]');
    firstError?.focus();
  }
}
```

**Benefits:**
- Immediate focus on problem
- Screen reader announces error
- Clear next action

</v-click>

</div>

</div>

<!--
Marking fields as invalid is good, but not enough.

LEFT - Problem:
Form validates, shows errors, but focus stays on the submit button.
User has to hunt for the error!

[CLICK]
Especially bad for screen reader users - they have to tab through the entire form again.

RIGHT:
[CLICK]
Solution:
After validation, programmatically focus the first invalid field.

Now the user is immediately at the problem.
Screen reader announces the field and its error.
Clear, immediate feedback!

This is such a simple improvement but makes forms so much better.

Combine this with aria-invalid and aria-describedby, and you have a fully accessible form validation pattern.

Now let's talk about dynamic content...
-->

---
layout: center
class: text-center
---

# Demo

<StorybookLink story="11-form-demo" />

<!--
Let's see all of this in action - form labels, validation, error handling, and focus management combined in one demo.
-->

---
layout: section
---

# Live Regions & Dynamic Content

Announcing changes to screen reader users

<!--
Modern apps are dynamic - content changes without page reloads.

But screen readers don't automatically announce these changes.

This is where ARIA live regions come in.

And this is where things get tricky...
-->

---
layout: default
---

# The Live Region Problem

<div class="grid grid-cols-2 gap-4">

<div>

### ❌ Problem

```js
// Add notification
function showNotification(msg) {
  const div = document.createElement('div');
  div.setAttribute('aria-live', 'polite');
  div.textContent = msg;
  // Live region is added after
  // initial page load
  document.body.appendChild(div);
}
```

<v-click>

**Issues:**
- Element created AFTER aria-live set
- Screen readers miss it!
- Silent failure - no announcement

</v-click>

</div>

<div>

<v-click>

### ✅ Solution: Global Live Region

```html
<!-- In your HTML, always present -->
<div class="sr-only" id="announcer"
  aria-live="polite" aria-atomic="true"
></div>
```

```js
function announce(msg) { // Update content
  document.getElementById('announcer')
    .textContent = msg;
}
```

**Benefits:**
- Live region exists before update
- Reliable announcements
- Works across all screen readers

</v-click>

</div>

</div>

<!--
This is one of the trickiest accessibility issues in SPAs.

LEFT - Problem:
Creating an element and setting aria-live at the same time.
Looks like it should work, right?

[CLICK]
Wrong! Screen readers need the aria-live element to exist BEFORE content changes.
If you create it dynamically, they miss it. Silent failure.

RIGHT:
[CLICK]
Solution: Global live region pattern.
Create a persistent, empty live region in your HTML.
When you need to announce something, just update its content.

This is the reliable pattern that works across all screen readers.

But there's another approach...
-->

---
layout: default
---

# Global vs Local Live Regions

<div class="grid grid-cols-2 gap-4">

<div>

## Global Pattern

```html
<!-- Global single announcer -->
<div id="announcer" class="sr-only"
  aria-live="polite">
</div>
```

```js
announce("Item added to cart");
announce("Form saved");
announce("3 new messages");
```

**Use when:**
- Toast notifications
- Status messages
- Global announcements

</div>

<div>

## Local Pattern

```html
<!-- Live region in component -->
<div class="chat">
  <div aria-live="polite" aria-atomic="false">
    <div>First message from Jane</div>
    <!-- New Messages added here -->
    <div>New message from John</div>
  </div>
</div>
```

**Use when:**
- Chat messages
- Live feeds
- Component-specific updates

</div>

</div>

<v-click>

<div class="mt-2 p-4 bg-blue-500 bg-opacity-10 rounded">
💡 Key: Live region must exist BEFORE content changes!
</div>

</v-click>

<!--
Two patterns for live regions:

LEFT - Global Pattern:
Single announcer for the whole app.
Perfect for toast notifications, status messages, global announcements.
Simple to implement and maintain.

RIGHT - Local Pattern:
Live region within a specific component.
Perfect for chat messages, live feeds, component-specific updates.
The live region is part of the component structure.

[CLICK]
The critical rule for both: The live region must exist in the DOM BEFORE you update its content.

That's the secret to reliable screen reader announcements.
-->

---
layout: default
---

# ARIA Live Attributes

```html
<div aria-live="polite" aria-atomic="true" aria-relevant="additions text">
  Content updates here
</div>
```

<v-clicks>

- **aria-live="polite"** - Announce when user is idle (most common)
- **aria-live="assertive"** - Announce immediately (use sparingly!)
- **aria-atomic="true"** - Read entire region (vs just changes)
- **aria-atomic="false"** - Read only changes (good for lists)
- **aria-relevant** - What changes to announce (additions, removals, text, all)

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-500 bg-opacity-10 rounded">
⚠️ Use assertive sparingly - it interrupts the user!
</div>

</v-click>

<!--
Quick reference for ARIA live attributes:

[GO THROUGH EACH CLICK]

aria-live="polite": Wait for user to finish, then announce. Use this 99% of the time.

aria-live="assertive": Interrupt immediately. Only for critical alerts like "Your session is expiring!"

aria-atomic="true": Read the entire region. Good for status messages.

aria-atomic="false": Only read what changed. Good for chat messages or lists.

aria-relevant: Control what triggers announcements.

[FINAL CLICK]
Warning: Don't overuse assertive! It's like someone shouting while you're trying to read.
Very annoying and disorienting.

Polite is almost always the right choice.

Now let's quickly cover visual accessibility...
-->

---
layout: section
---

# Visual Accessibility

Color contrast and media alternatives

<!--
We've focused a lot on screen readers and keyboard users.

But visual accessibility matters too!

Let's cover the essentials quickly...
-->


---
layout: default
---

# Color Contrast

<div class="grid grid-cols-2 gap-4">

<div>

### ❌ Problem

```css
/* Light gray on white */
.text {
  color: #999999;
  background: #FFFFFF;
}
/* Contrast ratio: 2.85:1 */
```

<div class="mt-4 p-4" style="color: #999999; background: #FFFFFF; border: 1px solid #ccc;">
This text is hard to read
</div>

</div>

<div>

### ✅ Solution

```css
/* Dark gray on white */
.text {
  color: #595959;
  background: #FFFFFF;
}
/* Contrast ratio: 7:1 */
```

<div class="mt-4 p-4" style="color: #595959; background: #FFFFFF; border: 1px solid #ccc;">
This text is easy to read
</div>

</div>

</div>

<v-clicks>

**WCAG Requirements:**
- **Level AA:** 4.5:1 for normal text, 3:1 for large text
- **Level AAA:** 7:1 for normal text, 4.5:1 for large text

**Tools:** Chrome DevTools, WebAIM Contrast Checker, Stark

</v-clicks>

<!--
Color contrast is critical for users with low vision or color blindness.

LEFT - Problem:
Light gray on white. Looks modern and minimal, but...
Contrast ratio is only 2.85:1 - fails WCAG!

RIGHT - Solution:
Darker gray on white. Still looks good, but readable.
Contrast ratio is 7:1 - passes AAA!

[CLICKS]
WCAG requirements:
- Level AA (minimum): 4.5:1 for normal text
- Level AAA (enhanced): 7:1 for normal text
- Large text has lower requirements

Tools to check:
- Chrome DevTools has a built-in contrast checker
- WebAIM has an online tool
- Stark plugin for Figma/Sketch

Pro tip: Check your design system colors early!
-->

---
layout: default
---

# Media Alternatives

<div class="flex gap-4">

<div class="w-[70%]">

<v-click>

## Images

```html
<!-- Informative image -->
<img src="angular-buch.png"
     alt="Book Cover of the German book 'Das moderne Praxisbuch zu Angular: Von den Grundlagen bis zur professionellen Entwicklung mit Signals', written by Ferdinand Malcher, Danny Koppenhagen and Johannes Hoppe" />

<!-- Decorative image -->
<img src="decoration.png" alt="" />

<!-- Complex image -->
<img src="diagram.png" alt="System architecture"
     aria-describedby="diagram-desc" />
<div id="diagram-desc">
  Detailed description of the architecture...
</div>
```

</v-click>

</div>

<div class="w-[30%]">

<v-switch>
  <template #1>

### ❌ Problem

<img src="https://foo.bar/INVALID.png" class="h-70 w-55 rounded shadow border-1" />

  </template>
  <template #2>

### ✅ Correct

<img src="https://angular-buch.com/assets/img/book-cover-v1m.png" alt="Book Cover of the German Angular book" class="max-h-70 rounded shadow" />

   </template>
</v-switch>

</div>

</div>

<!--
Media alternatives are essential for users who can't see or hear content.

Images:
- Informative images: Describe what the image conveys
- Decorative images: Empty alt text (alt="") so screen readers skip it
- Complex images: Use aria-describedby for longer descriptions

[CLICK] Here we see an image with an invalid URL - the browser shows a broken image icon.
[CLICK] After fixing the URL, the book cover loads correctly.

Quick rule: If removing the image/video would lose information, you need an alternative.
-->

---
layout: default
---

# Media Alternatives

## Videos

```html
<video controls>
  <source src="tutorial.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srclang="en" label="English" />
  <track kind="descriptions" src="descriptions.vtt" srclang="en" />
</video>
```

<!--
Media alternatives are essential for users who can't see or hear content.

[CLICK]
Videos:
- Always provide captions for deaf users
- Consider audio descriptions for blind users
- Use the track element with WebVTT files

Quick rule: If removing the image/video would lose information, you need an alternative.

Now let's talk about reduced motion and visual preferences...
-->

---
layout: default
---

# Reduced Motion

<div class="grid grid-cols-2 gap-4">

<div>

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

</div>

<div>

<v-clicks>

- Some users experience **motion sickness** from animations
- Respect the OS-level preference via media query
- Easy to implement, big impact

</v-clicks>

</div>

</div>

<!--
Reduced motion is often overlooked but important.

Some users get dizzy or nauseous from animations and transitions.
Modern operating systems let users set a "reduce motion" preference.
We can respect that with a simple media query.

This is one of the easiest accessibility wins you can get!
-->

---
layout: image
image: /testing.jpg
---

# Testing & Tools

How to verify accessibility

<!--
You can't improve what you don't measure.

Let's look at the essential tools for testing accessibility.

I'll keep this brief since we're running short on time...
-->

---
layout: default
---

# Essential Testing Tools

<v-clicks>

### Automated Testing
- **axe DevTools** (Chrome/Firefox extension) - catches ~30-40% of issues
- **Lighthouse** (built into Chrome) - accessibility audit
- **WAVE** (WebAIM) - visual feedback overlay

### Manual Testing
- **Keyboard only** - unplug your mouse, try to use your app!
- **Screen reader** - VoiceOver (Mac), NVDA (Windows, free), JAWS (Windows)
- **Zoom to 200%** - does your layout still work?

### Browser DevTools
- **Accessibility Tree** - see what assistive tech sees
- **Contrast Checker** - verify color ratios
- **Lighthouse** - automated audit

</v-clicks>

<!--
Testing accessibility requires both automated tools and manual testing.

[CLICK]
Automated tools:
- axe DevTools: Best browser extension, catches many issues
- Lighthouse: Built into Chrome, gives you a score
- WAVE: Visual overlay showing issues

But automated tools only catch 30-40% of issues!

[CLICK]
Manual testing is essential:
- Keyboard only: Unplug your mouse and try to use your app
- Screen reader: Actually test with VoiceOver or NVDA
- Zoom: Make sure your layout works at 200% zoom

[CLICK]
Browser DevTools:
- Accessibility Tree shows what screen readers see
- Contrast checker built into Chrome
- Lighthouse for quick audits

Start with automated tools, but don't stop there!

Let's wrap up...
-->

---
layout: center
class: text-center
---

# Key Takeaways

<div class="mt-4 p-4">
<v-clicks>

1. 🏗️ **Use semantic HTML** - it's 80% of the solution
2. ⌨️ **Test with keyboard** - if you can't use it, it's broken
3. 🎯 **Focus management** - especially in SPAs
4. 📝 **Forms need labels** - and proper error handling
5. 📢 **Live regions** - must exist before updates
6. 🎨 **Contrast matters** - check your colors
7. 🧪 **Test, test, test** - automated + manual

</v-clicks>
</div>

<v-click>

<div class="mt-8 p-4 bg-green-500 bg-opacity-10 rounded">
💚 Accessibility is not a feature - it's a fundamental requirement
</div>

</v-click>

<!--
Let's wrap up with the key takeaways:

[GO THROUGH EACH CLICK]

1. Semantic HTML solves most problems - use the right elements!
2. Keyboard testing is essential - unplug your mouse
3. Focus management in SPAs - move focus after navigation
4. Forms need proper labels and error handling
5. Live regions must exist before you update them
6. Check your color contrast - it's easy to fix
7. Test with both automated tools and manual testing

[FINAL CLICK]
Remember: Accessibility is not a feature you add at the end.
It's a fundamental requirement for building software that works for everyone.

Start small, but start today!
-->

---
layout: default
---

# Resources

<div class="grid grid-cols-2 gap-8">

<div>

### Learn More
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

### Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

</div>

<div>

### My Content

- 📝 [Blog: k9n.dev](https://k9n.dev)
- 🐦 [BlueSky: @k9n.dev](https://bsky.app/profile/k9n.dev)
- 💼 [LinkedIn](https://linkedin.com/in/d-koppenhagen)

### This Talk

- 📊 Slides: [github.com/d-koppenhagen/...](https://github.com/d-koppenhagen)
- 💬 Questions? Let's chat!

</div>

</div>

<!--
Here are resources to continue your accessibility journey:

LEFT SIDE:
- WCAG Guidelines: The official spec
- MDN: Great practical guides
- WebAIM: Excellent articles and tools
- A11y Project: Community-driven resources

Tools we discussed today

RIGHT SIDE:
My content if you want to follow along or reach out
And these slides will be available on GitHub

Questions?
-->

---
layout: end
---

# Thank You! 🙏

## Questions?

<div class="mt-8 flex items-center justify-center gap-8">
  <div>
    <a href="https://github.com/d-koppenhagen/2026-02-11-Mind_the_A11y_Gap" target="_blank">
      <img src="/qr-github.png" alt="QR Code to GitHub Repository" class="w-48 h-48" />
    </a>
    <p class="text-sm mt-2">Slides & Code</p>
  </div>
  <div>
    Danny Koppenhagen<br>
    <a href="https://k9n.dev">k9n.dev</a>
  </div>
</div>

<!--
Thank you all for your attention!

I hope this gives you a good starting point for improving accessibility in your projects.

Remember: Start small, but start today.

Every improvement makes the web more inclusive.

Questions?
-->
