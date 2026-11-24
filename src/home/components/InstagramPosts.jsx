import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { instagramPosts } from '../../data/instagramPosts.js';
import ReelIcon from '../../assets/instagram/icon-reel.svg?react';
import PostIcon from '../../assets/instagram/icon-post.svg?react';

const TYPE_ICONS = {
	reel: ReelIcon,
	post: PostIcon,
};

const EMBLA_OPTIONS = {
	loop: true,
	align: 'start',
	dragFree: true,
	watchDrag: true,
};

const prefersReducedMotion =
	typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const EMBLA_PLUGINS = [
	AutoScroll({
		playOnInit: !prefersReducedMotion,
		speed: 0.6,
		startDelay: 0,
		stopOnMouseEnter: true,
		stopOnInteraction: false,
		stopOnFocusIn: true,
	}),
];

export const InstagramPosts = () => {
	const [emblaRef] = useEmblaCarousel(EMBLA_OPTIONS, EMBLA_PLUGINS);

	return (
		<article id="instagram-posts" className="bg-rose-thiny pt-12 pb-8 sm:pb-10 md:pb-56 relative">
			<div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10">
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex">
						{instagramPosts.map((post) => {
							const TypeIcon = TYPE_ICONS[post.type] ?? PostIcon;

							return (
								<a
									key={post.id}
									href={post.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={post.alt}
									className="group relative shrink-0 overflow-hidden rounded-2xl w-40 sm:w-48 md:w-52 lg:w-56 xl:w-60 aspect-[4/5] mr-2 sm:mr-3"
								>
									<img
										src={post.thumbnail}
										alt={post.alt}
										className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
									/>
									<span className="absolute top-3 right-3 z-10 inline-flex h-4 w-4 sm:h-5 sm:w-5 text-white pointer-events-none">
										<TypeIcon className="h-full w-full" aria-hidden="true" />
									</span>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</article>
	);
};
