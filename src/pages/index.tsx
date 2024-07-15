import { GetServerSideProps } from 'next'
import HomeScreen from '../screens/HomeScreen';
import { getSSRConfig } from '../config/ssrConfig'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const config = getSSRConfig();
  return {
    props: {
      config,
    },
  }
}

const HomePage: React.FC<React.ComponentProps<typeof HomeScreen>> = (props) => {
  return <HomeScreen {...props} />;
};

export default HomePage;
