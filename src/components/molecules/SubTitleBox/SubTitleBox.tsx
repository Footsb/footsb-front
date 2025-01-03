import { Text } from '@/components/atoms/texts';

interface Props {
  title: string;
}

const SubTitleBox = ({ title }: Props) => {
  return (
    <div className="relative w-fit">
      <Text value={title} type="m_bold" extraStyle="pr-4" />
      <div className="absolute right-2 -bottom-[3px] pl-4 w-1/2 h-3 bg-lime-300 -skew-y-6 -z-10" />
    </div>
  );
};

export default SubTitleBox;
