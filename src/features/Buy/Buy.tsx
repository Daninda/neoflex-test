import Button from '@components/Button';
import { useAppSelector } from '@hooks';
import { Block, Text, Total, Wrapper } from './styled';

const Buy = () => {
  const countList = useAppSelector(state => state.basket.countList);
  const basket = useAppSelector(state => state.basket.list);

  const total = basket.reduce((acc, value) => {
    const count = countList.find(countItem => countItem.id === value.id)?.count;
    if (count) {
      return acc + count * (value.discountedPrice ? value.discountedPrice : value.price);
    } else return acc;
  }, 0);

  return (
    <Wrapper>
      <Block>
        <Total>
          <Text>ИТОГО</Text>
          <Text>
            {total.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0,
            })}
          </Text>
        </Total>
        <Button
          $type='tertiary'
          $disabled={!total}
          onClick={() => {
            console.log('buy');
          }}
        >
          Перейти к оформлению
        </Button>
      </Block>
    </Wrapper>
  );
};

export default Buy;
