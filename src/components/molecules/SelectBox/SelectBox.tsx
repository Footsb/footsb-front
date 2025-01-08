import { Text } from '@/components/atoms/texts';
import { ChooseCard } from '@/components/atoms/items';

interface Props {
  list: { id: number; name?: string; position?: string; formation?: string }[];
  title: string;
}

const SelectBox = ({ list, title }: Props) => {
  return (
    <div className="flex flex-col gap-3 h-[144px]">
      <Text value={title} type="s_regular" extraStyle="text-center" />
      <div className="flex flex-col gap-2 h-full">
        {list.length === 0 ? (
          <div className="flexCenter px-4 h-full emptyBoxBorder">
            <Text
              value={`설정한\n포메이션이\n없어요!`}
              type="s_regular"
              extraStyle="text-center whitespace-pre-wrap	leading-snug"
            />
          </div>
        ) : (
          list.map((el) => {
            return <ChooseCard key={el.id} {...el} />;
          })
        )}
      </div>
    </div>
  );
};

export default SelectBox;
