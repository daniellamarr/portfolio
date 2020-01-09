const tabs = () => {
  const element = document.getElementById('tabs-section');
  const items = element.childNodes;
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    const image = document.createElement('img');
    const button = document.createElement('button');
    button.innerHTML = item.getAttribute('text');
    image.setAttribute('src', item.getAttribute('backgroundimage'));
    item.appendChild(button);
    item.appendChild(image);
  }
};

export default tabs;
