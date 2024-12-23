import { Text } from '../../texts';

interface Props {
  formation: string;
}

const FormationCard = ({ formation }: Props) => {
  return (
    <div className="grayborder p-3 text-center cursor-default">
      <Text value={formation} type="m_regular" />
    </div>
  );
};

export default FormationCard;
