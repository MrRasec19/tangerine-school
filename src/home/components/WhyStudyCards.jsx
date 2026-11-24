import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { studyWhitUs } from '../../data/studyWhitUs.js';
import { DecorativeSvg } from './DecorativeSVG.jsx';
import XIcon from '../../assets/why-us/x-icon.svg?react';
import CircleIcon from '../../assets/why-us/circle-icon.svg?react';

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';
const DESKTOP_QUERY = '(min-width: 1024px)';

const hasFinePointer = () => window.matchMedia(FINE_POINTER_QUERY).matches;
const isDesktopViewport = () => window.matchMedia(DESKTOP_QUERY).matches;

const FOCUSABLE_SELECTOR = [
	'button:not([disabled])',
	'[href]',
	'input:not([disabled])',
	'select:not([disabled])',
	'textarea:not([disabled])',
	'[tabindex]:not([tabindex="-1"])',
].join(', ');

const useMediaQuery = (query, getInitial) => {
	const [matches, setMatches] = useState(getInitial);

	useEffect(() => {
		const media = window.matchMedia(query);
		const update = () => setMatches(media.matches);

		update();
		media.addEventListener('change', update);

		return () => media.removeEventListener('change', update);
	}, [query]);

	return matches;
};

const CardWindowChrome = ({ children }) => (
	<div className="bg-blue-strong rounded-t-2xl flex items-center justify-between px-4 py-4 border-b-[3px] border-orange-thiny shrink-0">
		<div className="flex gap-2">
			<DecorativeSvg className="inline-flex shrink-0 pointer-events-none w-4 h-4">
				<CircleIcon className="w-full h-full text-orange-thiny" />
			</DecorativeSvg>
			<DecorativeSvg className="inline-flex shrink-0 pointer-events-none w-4 h-4">
				<CircleIcon className="w-full h-full text-orange-thiny" />
			</DecorativeSvg>
			<DecorativeSvg className="inline-flex shrink-0 pointer-events-none w-4 h-4">
				<CircleIcon className="w-full h-full text-orange-thiny" />
			</DecorativeSvg>
		</div>
		{children}
	</div>
);

const WhyCardModal = ({ card, opener, onClose }) => {
	const dialogRef = useRef(null);
	const titleId = useId();

	useEffect(() => {
		const scrollY = window.scrollY;
		const { body } = document;
		const previousStyle = {
			overflow: body.style.overflow,
			position: body.style.position,
			top: body.style.top,
			width: body.style.width,
			paddingRight: body.style.paddingRight,
		};
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

		body.style.overflow = 'hidden';
		body.style.position = 'fixed';
		body.style.top = `-${scrollY}px`;
		body.style.width = '100%';
		body.style.paddingRight = `${scrollbarWidth}px`;

		const dialog = dialogRef.current;
		dialog?.focus();

		const onKeyDown = (event) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				onClose();
				return;
			}

			if (event.key !== 'Tab' || !dialog) return;

			const focusable = [...dialog.querySelectorAll(FOCUSABLE_SELECTOR)];
			if (focusable.length === 0) {
				event.preventDefault();
				dialog.focus();
				return;
			}

			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			const active = document.activeElement;

			if (event.shiftKey && (active === first || active === dialog)) {
				event.preventDefault();
				last.focus();
				return;
			}

			if (!event.shiftKey && active === last) {
				event.preventDefault();
				first.focus();
			}
		};

		document.addEventListener('keydown', onKeyDown);

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			body.style.overflow = previousStyle.overflow;
			body.style.position = previousStyle.position;
			body.style.top = previousStyle.top;
			body.style.width = previousStyle.width;
			body.style.paddingRight = previousStyle.paddingRight;
			window.scrollTo(0, scrollY);
			opener?.focus();
		};
	}, [onClose, opener]);

	return createPortal(
		<div className="fixed inset-0 z-[80]">
			<div className="absolute inset-0 bg-black/30" onClick={onClose} />
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 py-8">
				<div
					ref={dialogRef}
					id="why-card-dialog"
					role="dialog"
					aria-modal="true"
					aria-labelledby={titleId}
					tabIndex={-1}
					className="pointer-events-auto mx-auto flex w-full max-w-sm max-h-[calc(100dvh-4rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl outline-none sm:max-w-md"
					onClick={(event) => event.stopPropagation()}
				>
					<CardWindowChrome>
						<button
							type="button"
							aria-label="Cerrar"
							className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-orange-thiny"
							onClick={onClose}
						>
							<XIcon className="h-4 w-4" />
						</button>
					</CardWindowChrome>
					<div className="overflow-y-auto p-8 text-center">
						<h3 id={titleId} className="text-orange text-2xl md:text-3xl font-bold mb-6">
							{card.title}
						</h3>
						<p className="text-blue-strong text-base md:text-lg leading-snug font-bold text-left text-pretty">
							{card.text}
						</p>
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default function WhyStudyCards() {
	const [clickedCardId, setClickedCardId] = useState(null);
	const [modalCardId, setModalCardId] = useState(null);
	const openerRef = useRef(null);
	const finePointer = useMediaQuery(FINE_POINTER_QUERY, hasFinePointer);
	const isDesktop = useMediaQuery(DESKTOP_QUERY, isDesktopViewport);
	const modalCard = studyWhitUs.find((card) => card.id === modalCardId) ?? null;

	useEffect(() => {
		if (isDesktop) setModalCardId(null);
	}, [isDesktop]);

	const closeModal = useCallback(() => setModalCardId(null), []);

	const openModal = (cardId, opener) => {
		openerRef.current = opener;
		setModalCardId(cardId);
	};

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 overflow-visible">
			{studyWhitUs.map((card) => {
				const isClicked = isDesktop && clickedCardId === card.id;

				return (
					<div
						key={card.id}
						className={`why-study-card relative overflow-visible ${
							isClicked ? 'z-30' : 'z-0'
						}`}
						onMouseEnter={() => {
							if (!isDesktop || !finePointer) return;
							setClickedCardId(card.id);
						}}
						onMouseLeave={() => {
							if (!isDesktop || !finePointer) return;
							setClickedCardId(null);
						}}
						onClick={(event) => {
							if (isDesktop) return;
							openModal(card.id, event.currentTarget);
						}}
						onKeyDown={(event) => {
							if (isDesktop) return;
							if (event.key !== 'Enter' && event.key !== ' ') return;
							event.preventDefault();
							openModal(card.id, event.currentTarget);
						}}
						role={isDesktop ? undefined : 'button'}
						tabIndex={isDesktop ? undefined : 0}
						aria-haspopup={isDesktop ? undefined : 'dialog'}
						aria-expanded={isDesktop ? undefined : modalCardId === card.id}
						aria-controls={isDesktop ? undefined : 'why-card-dialog'}
					>
						<div
							className={`why-study-card-face relative max-lg:inset-auto lg:absolute lg:inset-0 rounded-2xl overflow-hidden flex flex-col shadow-lg transition-all duration-300 ease-out ${
								isClicked ? 'opacity-80 scale-95' : 'opacity-100 scale-100'
							}`}
						>
							<div className="w-full shrink-0 lg:h-3/4 lg:min-h-0">
								<img
									src={card.img}
									alt={card.title}
									className="block w-full h-auto lg:h-full lg:object-cover"
								/>
							</div>

							<div className="p-4 text-center bg-orange w-full flex items-center justify-center shrink-0 lg:h-1/4">
								<h3 className="text-xl md:text-2xl lg:text-3xl text-blue-strong font-semibold">
									{card.title}
								</h3>
							</div>
						</div>

						{isDesktop && (
							<div
								className={`absolute left-1/2 top-1/2 z-40 w-full min-h-0 lg:w-[140%] lg:min-h-[520px]
              -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl
              transition-all duration-300 ease-in-out
              ${
								isClicked
									? 'opacity-100 scale-100 pointer-events-auto'
									: 'opacity-0 scale-90 pointer-events-none'
							}`}
							>
								<div className="bg-blue-strong rounded-t-2xl flex items-center justify-between px-4 py-4 border-b-[3px] border-orange-thiny">
									<div className="flex gap-2">
										<DecorativeSvg className="inline-flex shrink-0 pointer-events-none w-4 h-4">
											<CircleIcon className="w-full h-full text-orange-thiny" />
										</DecorativeSvg>
										<DecorativeSvg className="inline-flex shrink-0 pointer-events-none w-4 h-4">
											<CircleIcon className="w-full h-full text-orange-thiny" />
										</DecorativeSvg>
										<DecorativeSvg className="inline-flex shrink-0 pointer-events-none w-4 h-4">
											<CircleIcon className="w-full h-full text-orange-thiny" />
										</DecorativeSvg>
									</div>

									<button
										type="button"
										aria-label="Cerrar"
										aria-hidden="true"
										tabIndex={-1}
										className="why-card-close inline-flex shrink-0 pointer-events-none w-4 h-4"
									>
										<XIcon className="w-full h-full text-orange-thiny" />
									</button>
								</div>

								<div className="p-8 text-center">
									<h3 className="text-orange text-2xl md:text-3xl font-bold mb-6">{card.title}</h3>

									<p className="text-blue-strong text-base md:text-lg leading-snug font-bold text-left text-pretty">
										{card.text}
									</p>
								</div>
							</div>
						)}
					</div>
				);
			})}
			{modalCard && (
				<WhyCardModal
					card={modalCard}
					opener={openerRef.current}
					onClose={closeModal}
				/>
			)}
		</div>
	);
}
