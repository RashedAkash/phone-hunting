function loadPhone() {
  fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res => res.json())
  .then(data=>displayPhone(data.data))
};

function displayPhone(phones)
{
  const phoneContainer = document.getElementById('phone-container');
  phones.forEach(phone => {
    const phoneCard = document.createElement('div');
    phoneCard.classList = 'card p-4 bg-gray-100 shadow-xl';
    phoneCard.innerHTML = 
      `<figure><img src="${phone.image}" /></figure>
          <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
      `
      phoneContainer.appendChild(phoneCard);
    console.log(phone);
  });
}
loadPhone()

//handleSearch

const handleSearch = () => {
  console.log('click');
}