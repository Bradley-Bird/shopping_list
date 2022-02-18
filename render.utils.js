export function renderItem(item) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    item.got && li.classList.add('complete');
    li.textContent = item.item;
    ul.append(li);
    return ul;
}
