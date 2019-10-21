document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const stickerListItem = createStickerListItem(event.target);
  const stickerList = document.querySelector('#sticker-list');
  stickerList.appendChild(stickerListItem);

  event.target.reset();
}
//-----------------------------------------------------
const createStickerListItem = function (form) {
  const stickerListItem = document.createElement('li');
  stickerListItem.classList.add('sticker-list-item');

  const sticker = document.createElement('h2');
  sticker.textContent = form.sticker.value;
  stickerListItem.appendChild(sticker);

  const artist = document.createElement('h3');
  artist.textContent = form.artist.value;
  stickerListItem.appendChild(artist);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  stickerListItem.appendChild(category);

  return stickerListItem;
}

const handleDeleteAllClick = function (event) {
  const stickerList = document.querySelector('#sticker-list');
  stickerList.innerHTML = '';
}
