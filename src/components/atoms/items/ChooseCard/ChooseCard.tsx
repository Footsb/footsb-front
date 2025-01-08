import { Text } from '../../texts';

interface Props {
  type?: string;
  position?: string;
  name?: string;
  formation?: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

const PlayerCard = ({
  position = '',
  name = '',
  formation = '',
  isSelected = false,
  type = 'list',
  onSelect,
}: Props) => {
  const checkSelectStyle = () => {
    return isSelected
      ? `primaryborder transition-all`
      : `grayBorder transition-all`;
  };

  return (
    <div
      className={`${checkSelectStyle()} ${
        type === 'list' ? 'cursor-default' : 'cursor-pointer'
      } flexCenter p-2 gap-5`}
      onClick={onSelect}
    >
      {position && (
        <div className="w-[32px] text-center">
          <Text value={position} type="s_regular" />
        </div>
      )}
      <Text value={name || formation} type="m_bold" />
    </div>
  );
};

export default PlayerCard;
