import './style.css';

const logoElement =
    document.querySelector<HTMLImageElement>(`img[alt='Google']`);
if (logoElement) {
    logoElement.src =
        'https://cdn.jsdelivr.net/gh/33kk/uso-archive@flomaster/data/screenshots/173462_after.gif';
    logoElement.removeAttribute('srcset');
}
