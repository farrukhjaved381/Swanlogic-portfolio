import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
	{
		text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore.',
		name: 'Gary Neville',
		company: 'Inside Out Contracts',
		initial: 'G',
	},
	{
		text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore.',
		name: 'Gary Neville',
		company: 'Inside Out Contracts',
		initial: 'G',
	},
	{
		text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore.',
		name: 'Gary Neville',
		company: 'Inside Out Contracts',
		initial: 'G',
	},
	{
		text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore.',
		name: 'Gary Neville',
		company: 'Inside Out Contracts',
		initial: 'G',
	},
	{
		text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa inventore.',
		name: 'Gary Neville',
		company: 'Inside Out Contracts',
		initial: 'G',
	},
];

const Testimonials = () => {
	const scrollRef = useRef(null);
	const firstCardRef = useRef(null);
	const [stepWidth, setStepWidth] = useState(0);

	useEffect(() => {
		const measure = () => {
			const card = firstCardRef.current;
			if (!card || !scrollRef.current) return;
			const style = window.getComputedStyle(card);
			const marginRight = parseFloat(style.marginRight || '0');
			setStepWidth(Math.round(card.offsetWidth + marginRight));
		};

		measure();
		window.addEventListener('resize', measure);
		return () => window.removeEventListener('resize', measure);
	}, []);

	const nextSlide = () => {
		if (!scrollRef.current || stepWidth === 0) return;
		const sc = scrollRef.current;
		const { scrollLeft, scrollWidth, clientWidth } = sc;
		let newLeft = scrollLeft + stepWidth;
		if (newLeft > scrollWidth - clientWidth + 5) newLeft = 0;
		sc.scrollTo({ left: newLeft, behavior: 'smooth' });
	};

	const prevSlide = () => {
		if (!scrollRef.current || stepWidth === 0) return;
		const sc = scrollRef.current;
		const { scrollLeft, scrollWidth, clientWidth } = sc;
		let newLeft = scrollLeft - stepWidth;
		if (newLeft < 0) newLeft = Math.max(0, scrollWidth - clientWidth);
		sc.scrollTo({ left: newLeft, behavior: 'smooth' });
	};

	return (
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center mb-8">
					<div>
						<div className="mb-2">
							<span className="text-sm text-gray-500">Testimonials</span>
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
							Why Our Clients Love Craft CMS
						</h2>
					</div>

					<div className="flex gap-4">
						<button
							onClick={prevSlide}
							className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
						>
							<ChevronLeft className="w-6 h-6" />
						</button>
						<button
							onClick={nextSlide}
							className="w-12 h-12 rounded-full bg-lime-400 text-black flex items-center justify-center hover:bg-lime-500 transition-colors"
						>
							<ChevronRight className="w-6 h-6" />
						</button>
					</div>
				</div>

				{/* hide-scrollbar styles scoped here */}
				<style>{`
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

				{/* Horizontal scrollable testimonials */}
				<div
					ref={scrollRef}
					className="flex gap-6 overflow-x-auto px-2 py-4 scroll-smooth hide-scrollbar"
					style={{ WebkitOverflowScrolling: 'touch' }}
				>
					{testimonialsData.map((testimonial, index) => (
						<div
							key={index}
							ref={index === 0 ? firstCardRef : null}
							className="w-[320px] sm:w-[360px] lg:w-[420px] flex-shrink-0 group"
						>
							<div className="bg-gray-50 rounded-2xl p-6 h-full shadow-md transition-transform duration-300 group-hover:shadow-lg">
								<p className="text-gray-600 mb-6 line-clamp-4">
									{testimonial.text}
								</p>
								<div className="flex items-center">
									<div className="bg-lime-400 text-black font-bold text-xl w-10 h-10 flex items-center justify-center rounded-md mr-3">
										{testimonial.initial}
									</div>
									<div>
										<p className="font-semibold text-black">
											{testimonial.name}
										</p>
										<p className="text-sm text-gray-500">
											{testimonial.company}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;