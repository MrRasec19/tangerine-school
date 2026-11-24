import { OurMethods } from '../components/OurMethods';
import {
	TangerineBanner,
	WhyStudyWhitUs,
	Modalities,
	OurCompromise,
	FrequentlyQuestions,
	InstagramPosts,
	FollowUs,
	StudentsOpinions,
} from '../index';

export const HomePage = () => {
	return (
		<main>
			<TangerineBanner />
			<WhyStudyWhitUs />
			<OurMethods />
			<OurCompromise />
			<Modalities />
			<StudentsOpinions />
			<FrequentlyQuestions />
			<FollowUs />
			<InstagramPosts />
		</main>
	);
};
