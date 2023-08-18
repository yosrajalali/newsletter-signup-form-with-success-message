import desktopIllustration from '../assets/images/illustration-sign-up-desktop.svg';
import mobileIllustration from '../assets/images/illustration-sign-up-mobile.svg';

function ResponsiveImage() {
  return (
    <picture>
      <source
        media="(min-width: 200px) and (max-width: 767px)"
        type="image/webp"
        srcSet={mobileIllustration}
      />{' '}
      <source
        media="(min-width: 768px)"
        type="image/webp"
        srcSet={desktopIllustration}
      />{' '}
      <img
        className="responsive-image"
        src={mobileIllustration}
        alt="Responsive Image"
      />
    </picture>
  );
}

export default ResponsiveImage;
