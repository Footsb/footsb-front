import { Text } from '../../texts';

interface Props {
  position: string;
  name: string;
}

const PlayerCard = ({ position, name }: Props) => {
  return (
    <div className="flexBetweenCenter grayborder p-3">
      <Text value={position} type="s_regular" />
      <Text value={name} type="m_bold" />
    </div>
  );
};

export default PlayerCard;
