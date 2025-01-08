import { PageLayout } from '@/components/organism/common';
import { TodayMatch, SearchTeam } from '@/components/page/home';
import { MyTeamList } from '@/components/organism';

const Home = () => {
  return (
    <PageLayout>
      <TodayMatch />
      <SearchTeam />
      <MyTeamList />
    </PageLayout>
  );
};

export default Home;
