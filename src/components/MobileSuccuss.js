import React from 'react';
import icon from '../assets/images/icon-success.svg';

function MobileSuccuss({ onDismiss }) {
  return (
    <div className="mobileSuccuss">
      <img src={icon} alt="" />
      <h2 className="succussTitle">Thanks for subscribing!</h2>
      <p className="succussText">
        A confirmation email has been sent to <span>ash@loremcompany.com</span>.
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button
        className="succussBtn"
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss message"
      >
        Dismiss message
      </button>
    </div>
  );
}

export default MobileSuccuss;
