import { useState } from 'react';
import { RiGlobalLine } from 'react-icons/ri';
import Button from '../Button';
import { Wrapper } from './styled';

const langs = ['Каз', 'Рус', 'Eng'];

const SwithLangs = () => {
  const [lang, setLang] = useState('Рус');

  return (
    <Wrapper>
      <RiGlobalLine size={'2.4rem'} />
      {langs.map(value => {
        return (
          <Button
            key={value}
            $isActive={lang === value ? true : false}
            $type='secondary'
            onClick={() => {
              setLang(value);
            }}
          >
            {value}
          </Button>
        );
      })}
    </Wrapper>
  );
};

export default SwithLangs;
