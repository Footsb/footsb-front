import { Text } from '@/components/atoms/texts';

interface Props {
  type: string;
}

const Record = ({ type }: Props) => {
  const recordStyle: { [key: string]: string } = {
    win: 'text-primary',
    draw: 'text-gray',
    lose: 'text-danger',
  };

  const recordeTitle: { [key: string]: string } = {
    win: '승',
    draw: '무',
    lose: '패',
  };

  return (
    <div className={`${recordStyle[type]}`}>
      <Text value={recordeTitle[type]} type="m_bold" />
    </div>
  );
};

export default Record;
