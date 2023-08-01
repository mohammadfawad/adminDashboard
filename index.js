const sideMenue = document.querySelector("aside");
const menueBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//Show Sidebar
menueBtn.addEventListener('click', () => {
    sideMenue.style.display = 'block';
});

// Close Sidebar
closeBtn.addEventListener('click', () => {
    sideMenue.style.display = 'none';
});

// Chanhe Theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Populate Table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger': order.shipping === 'Pending' ? 'warning' : 'primary' }">${order.shipping}</td>
                        <td class="primary">Details</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});