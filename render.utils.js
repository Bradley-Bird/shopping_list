export function renderItem(item) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    item.complete && li.classList.add('complete');
    li.textContent = item.item;
    ul.append(li);
    return ul;
}
