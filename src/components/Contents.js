import Form from './Form';
import List from './List';

function Contents({ onSubmit, emailError }) {
  return (
    <div className="content">
      <h1 className="title"> Stay updated! </h1>
      <p className="text">
        Join 60, 000 + product managers receiving monthly updates on:
      </p>
      <List />
      <Form onSubmit={onSubmit} emailError={emailError} />
    </div>
  );
}

export default Contents;
