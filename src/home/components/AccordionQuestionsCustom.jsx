import { useState } from 'react';
import { FAQ } from '../../data/frequentlyAskQuestions';
import ChevronDownIcon from '../../assets/faqs/custom-chevron-icon.svg?react';

export const AccordionQuestionsCustom = () => {
	const [openId, setOpenId] = useState(null);

	return (
		<div className="faq-list">
			{FAQ.map((data) => {
				const isOpen = openId === data.id;

				return (
					<div key={data.id} className="group border-b-2 border-orange-thiny">
						<button
							type="button"
							onClick={() => setOpenId(isOpen ? null : data.id)}
							aria-expanded={isOpen}
							className="
                flex w-full items-center justify-between gap-6
                min-h-[72px] lg:min-h-[96px]
                cursor-pointer list-none
                text-orange font-bold text-left
                text-[clamp(1.15rem,1.75vw,2.5rem)] lg:text-[clamp(1.5rem,1.75vw,2.5rem)]
                transition-colors duration-200
                focus:outline-none
                focus-visible:outline-none
              "
						>
							<span>{data.question}</span>

							<span
								className={`
                  h-6 w-6 shrink-0 text-orange
                  transition-transform duration-300 ease-in-out
                  ${isOpen ? 'rotate-180' : 'rotate-0'}
                `}
							>
								<ChevronDownIcon className="h-full w-full" />
							</span>
						</button>

						<div
							className={`
                grid overflow-hidden
                transition-[grid-template-rows]
                duration-250
                ease-out
                ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
              `}
						>
							<div className="min-h-0 overflow-hidden">
								<div
									className={`
                    max-w-[900px]
                    pb-6
                    text-orange-thiny
                    font-normal
                    leading-[1.5]
                    text-[clamp(1rem,1.6vw,1.9rem)] lg:text-[clamp(1.35rem,1.6vw,1.9rem)]
                    transition-opacity
                    duration-200
                    ${isOpen ? 'opacity-100' : 'opacity-0'}
                  `}
								>
									<p className="m-0 whitespace-pre-wrap">
										{data.answer}
										{data.link && (
											<>
												{' '}
												<a
													href={data.link.href}
													target="_blank"
													rel="noopener noreferrer"
													className="text-orange underline underline-offset-4 hover:opacity-80"
												>
													{data.link.label}
												</a>
											</>
										)}
									</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
