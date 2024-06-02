import { generalButtons } from '../lib/constants';
import Button from './Button';

const GeneralButtons = () => {
  return (
    <section className="btn-container">
      {generalButtons.map((button) => (
        <Button key={button.text}>
          {button.icon} {button.text}
        </Button>
      ))}
    </section>
  );
};

export default GeneralButtons;
