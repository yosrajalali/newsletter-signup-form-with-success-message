import ResponsiveImage from './ResponsiveImage';
import Contents from './Contents';

function Layout({ onSubmit, emailError }) {
  return (
    <main>
      <ResponsiveImage />
      <Contents onSubmit={onSubmit} emailError={emailError} />
    </main>
  );
}

export default Layout;
