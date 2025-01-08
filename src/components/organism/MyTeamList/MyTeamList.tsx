import { Carousel } from '@/components/atoms';
import { Text } from '@/components/atoms/texts';
import { SubTitleBox } from '@/components/molecules';
import { TeamCard } from '@/components/molecules/cards';

const MyTeamList = () => {
  return (
    <section className="py-4">
      <div className="pl-4">
        <SubTitleBox title="내 팀" />
      </div>
      <Carousel>
        <>
          {[1, 2, 3].map((el) => {
            return <TeamCard key={el} />;
          })}
          <li className="flexCenter p-3 min-w-[240px] w-full h-[140px] emptyBoxBorder">
            <Text value="팀 등록하기" type="m_bold" extraStyle="text-primary" />
          </li>
        </>
      </Carousel>
    </section>
  );
};

export default MyTeamList;
