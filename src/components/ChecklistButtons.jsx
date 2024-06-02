import { checklistButtons } from '../lib/constants';
import Button from './Button';

const ChecklistButtons = () => {
  return (
    <section className="btn-container">
      {checklistButtons.map((button) => (
        <Button key={button.text}>
          {button.icon} {button.text}
        </Button>
      ))}
    </section>
  );
};

export default ChecklistButtons;
