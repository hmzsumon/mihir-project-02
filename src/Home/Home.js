import HeroSection from '../Components/HeroSection/HeroSection';
import HowItWorks from '../Components/HowItWork/HowItWorks';
import RoadMap from '../Components/RoadMap/RoadMap';
import Faqs from '../Components/Faqs/Faqs';
import Team from '../Components/Team/Team';
import Footer from '../Components/Footer/Footer';
import ImportantDates from '../Components/ImportantDates/ImportantDates';
import About from '../Components/About/About';
import Collection from '../Components/Collection/Collection';
import UtilityToken from '../Components/UtilityToken/UtilityToken';
import UseCases from '../Components/UseCases/UseCases';
import Project from '../Components/Project/Project';
import RoadmapNew from '../Components/RoadmapNew/RoadmapNew';
import FooterNew from '../Components/FooterNew/FooterNew';

const Home = () => {
	return (
		<>
			<HeroSection />
			<ImportantDates />
			<About />
			<Collection />
			<UtilityToken />
			<UseCases />
			<Project />
			<RoadmapNew />
			<Team />
			{/* <RoadMap /> */}
			<Faqs />
			{/* <Footer /> */}
			<FooterNew />
		</>
	);
};

export default Home;
