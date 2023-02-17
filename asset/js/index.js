// Menu-mobile
var navMenu = document.getElementById('nav-menu');
var memu = document.getElementById('menu');
var heightMenu = memu.clientHeight;

navMenu.onclick = () => {
    var OpenCloseMenu = menu.clientHeight === heightMenu;
    if (OpenCloseMenu == false) {
        memu.style.height = '46px';
    } else {
        memu.style.height = 'auto';
    }
}


// Popup
var modal = document.querySelector('.modal');
var byeTickets = document.querySelectorAll('.buy-tickets');
var btnClose = document.querySelector('.modal-close');


// Fix bug khi click vào vùng trong popup vẫn bị ẩn popup
modal.addEventListener('click', (e) => {
    modal.classList.remove('open-popup');
})
// Ngăn hành vi sự kiện nổi bọt
var modalContainer = document.querySelector('.modal-container');
modalContainer.addEventListener('click', (e) => {
    e.stopPropagation();
})

for (const buyTicket of byeTickets) {
    // console.log(buyTicket);

    // Chặn mở popup khi click Button form
    var checkBtn = buyTicket.classList.contains('button-form');

    if (!checkBtn) {
        buyTicket.addEventListener('click', () => {
            modal.classList.toggle('open-popup');
        })

        btnClose.onclick = function RemoveClass() {
            modal.classList.remove('open-popup');
        }
    }
}



// Click vào các menu items thì ẩn đi thanh nav menu, ngoại trừ "More"
var navMenuItems = document.querySelectorAll('.main-menu li a[href*="#"]');

for (var i = 0; i < navMenuItems.length; i++) {
    var navMenuItem = navMenuItems[i];
    // console.log(navMenuItem);
    navMenuItem.onclick = (e) => {
        var checkParent = navMenuItem.nextElementSibling && navMenuItem.nextElementSibling.classList.contains('sub-menu');
        if (!checkParent) {
            menu.style.height = null;
        } else {
            e.preventDefault();
        }
    }
}


// Click nút more thì hiện ra các sub-menu con
// Click vào "More" lần nữa thì mất đi các sub-menu con
var subMenu = document.getElementById('sub-menu');
var more = document.getElementById('more');

more.onclick = () => {
    more.onclick = () => {
        var check = subMenu.style.display === 'none';

        if (check == true) {
            subMenu.style.display = 'block';
            // subMenu.style.boxShadow = 'none';
        } else {
            subMenu.style.display = 'none';
        }
    }
}

