import { Text } from '../../texts';

interface Props {
  position: string;
  name: string;
  isSelected?: boolean;
  type?: string;
  onSelect?: () => void;
}

const PlayerCard = ({
  position,
  name,
  isSelected = false,
  type = 'list',
  onSelect,
}: Props) => {
  const checkSelectStyle = () => {
    return isSelected
      ? `primaryborder transition-all`
      : `grayborder transition-all`;
  };

  return (
    <div
      className={`${checkSelectStyle()} ${
        type === 'list' ? 'cursor-default' : 'cursor-pointer'
      } flexBetweenCenter p-3`}
      onClick={onSelect}
    >
      <Text value={position} type="s_regular" />
      <Text value={name} type="m_bold" />
    </div>
  );
};

export default PlayerCard;
