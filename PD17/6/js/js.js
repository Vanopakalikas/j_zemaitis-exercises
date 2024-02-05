function removeFirstListItem(listId) {
    let listContainer = document.getElementById(listId);
    if (listContainer) {
      let firstItem = listContainer.getElementsByTagName('li')[0];
      if (firstItem) {
        listContainer.removeChild(firstItem);
      } 
    }
  }
  