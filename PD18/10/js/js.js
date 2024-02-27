function sortList(order) {
  let list = document.getElementById('myList');
  let items = Array.from(list.getElementsByTagName('li'));

  items.sort((a, b) => {
      let comparison = a.textContent.localeCompare(b.textContent);
      return order === 'asc' ? comparison : -comparison;
  });

  while (list.firstChild) {
      list.removeChild(list.firstChild);
  }

  items.forEach(item => list.appendChild(item));
}