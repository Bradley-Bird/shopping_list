import { checkAuth, logout, fetchItems, createItem, buyItem } from '../fetch-utils.js';
import { renderItem } from '../render.utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const shoppingForm = document.getElementById('shopping-form');

logoutButton.addEventListener('click', () => {
    logout();
});

async function renderItems() {
    const div = document.querySelector('.items');
    div.textContent = '';
    const items = await fetchItems();
    // console.log('items', items);
    for (let item of items) {
        const li = renderItem(item);

        li.addEventListener('click', async () => {
            await buyItem(item.id);
            renderItems();
        });
        div.append(li);
    }
}
renderItems();

shoppingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(shoppingForm);
    await createItem(data.get('item'));
    // console.log('data', data);
    shoppingForm.reset();
    renderItems();
});
