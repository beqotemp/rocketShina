const tabClick = ({ target }) => {
    const { dataset: { id = '' }} = target;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('selected'));
    target.classList.add('selected');
    document.querySelectorAll('.tab-panel').forEach(t => t.classList.add('hidden'));
    document.querySelector(`#${id}`).classList.remove('hidden');
};

const bindTabs = () => {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', tabClick);
  })
};

// Belts and braces, lets ensure our DOM is loaded and only assign click to the `tabs`
document.addEventListener('DOMContentLoaded', () => {
  bindTabs();
});