const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const items = document.querySelector('.gallery');
items.style.display = 'flex';
items.style.padding = '0';
items.style.fontSize = '24px';
items.style.listStyle = 'none';
items.style.color = 'tomato';
items.style.gap = '20px';
items.style.justifyContent = 'center';

images.map(image => {
    const li = `<li>
      <img class:"image" url=${image.url} alt=${image.alt} />
    </li>`;
    items.insertAdjacentHTML('beforeend', li)
  });