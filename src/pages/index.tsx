import { GetServerSideProps } from 'next'
import HomeScreen from '../screens/HomeScreen';
import { getSSRConfig } from '../config/ssrConfig'

const HomePage: React.FC = () => {
  return <HomeScreen />;
};

export default HomePage;
