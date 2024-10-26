function Menu(target) {
    const menuBtn = target;

    const dropdown = (menuItems) => {
        const onClick = () => {
            menuBtn.addEventListener('click', () => {
                menuItems.style.visibility == 'hidden'
                    ? menuItems.style.visibility = 'visible'
                    : menuItems.style.visibility = 'hidden';
            })
        }

        const onHover = () => {
            menuBtn.addEventListener('mouseover', () => {
                menuItems.style.visibility = 'visible';
            })

            menuBtn.addEventListener('mouseleave', () => {
                menuItems.style.visibility = 'hidden';
            })
        }

        return {
            onClick,
            onHover
        };
    }
    return {dropdown};
}

module.exports = Menu;