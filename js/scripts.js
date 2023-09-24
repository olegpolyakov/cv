const pageSections = Array.from(
    document.querySelectorAll('.page-section')
).reduce((map, element) => map.set(element.id, element), new Map());

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    const link = item.firstElementChild;

    link.addEventListener('click', event => {
        event.preventDefault();

        const pageSection = pageSections.get(event.target.hash.slice(1));

        pageSection.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        console.log(menuItems);

        menuItems.forEach(item => item.classList.remove('menu-item--active'));
        item.classList.add('menu-item--active');
    });
});