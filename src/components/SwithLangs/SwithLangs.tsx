import { Lang } from '../../icons';
import Button from '../Button';
import { Wrapper } from './styled';

const SwithLangs = () => {
  return (
    <Wrapper>
      <Lang />
      <Button $type='secondary' onClick={() => {}}>
        Рус
      </Button>
      <Button $type='secondary' onClick={() => {}}>
        Eng
      </Button>
    </Wrapper>
  );
};

export default SwithLangs;
