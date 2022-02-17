import { checkAuth, logout, fetchItems } from '../fetch-utils.js';
import { renderItem } from '../render.utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

// async function renderItems() {
//     const div = document.querySelector('.items');
//     const items = await fetchItems();

//     for (let item of items) {
//         const li = renderItem(item);
//         div.append(li);
//     }
// }
// renderItems();
