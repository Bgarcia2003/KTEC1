document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button[data-toggle]');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-toggle');
      const target = document.getElementById(targetId);

      if (target) {
        if (target.classList.contains('hidden')) {
          target.classList.remove('hidden');
          this.textContent = 'Show Less';
          this.setAttribute('aria-expanded', 'true');
        } else {
          target.classList.add('hidden');
          this.textContent = 'Learn More';
          this.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
});
