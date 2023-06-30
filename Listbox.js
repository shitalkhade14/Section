const listbox = document.getElementById('my-listbox');
const input = listbox.querySelector('.listbox-input');
const options = listbox.querySelectorAll('.listbox-options li');

input.addEventListener('focus', () => {
  listbox.setAttribute('aria-expanded', 'true');
  listbox.querySelector('.listbox-options').style.display = 'block';
});

input.addEventListener('blur', () => {
  listbox.setAttribute('aria-expanded', 'false');
  listbox.querySelector('.listbox-options').style.display = 'none';
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const selectedOption = listbox.querySelector('[aria-selected="true"]');
    if (selectedOption) {
      selectedOption.setAttribute('aria-selected', 'false');
      const index = Array.from(options).indexOf(selectedOption);
      const nextIndex = e.key === 'ArrowDown' ? index + 1 : index - 1;
      if (nextIndex >= 0 && nextIndex < options.length) {
        options[nextIndex].setAttribute('aria-selected', 'true');
        options[nextIndex].scrollIntoView({ block: 'nearest' });
      }
    } else {
      options[0].setAttribute('aria-selected', 'true');
    }
  } else if (e.key === 'Enter') {
    const selectedOption = listbox.querySelector('[aria-selected="true"]');
    if (selectedOption) {
      input.value = selectedOption.innerText;
      listbox.querySelector('.listbox-options').style.display = 'none';
      input.blur();
    }
  }
});

options.forEach((option) => {
  option.addEventListener('click', () => {
    input.value = option.innerText;
    listbox.querySelector('.listbox-options').style.display = 'none';
    input.blur();
  });
});
