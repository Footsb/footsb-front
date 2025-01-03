import { Text } from '../../texts';

interface Props {
  formation: string;
  type?: string;
  isSelected?: boolean;
  onSelect?: (formation: string) => void;
}

const FormationCard = ({
  formation,
  type = 'list',
  isSelected = false,
  onSelect = () => {},
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
      } p-2 text-center `}
      onClick={() => onSelect(formation)}
    >
      <Text value={formation} type="m_regular" />
    </div>
  );
};

export default FormationCard;
