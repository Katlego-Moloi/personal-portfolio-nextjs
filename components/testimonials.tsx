import React from 'react'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { testimonials } from '@/data'

export const Testimonials = () => {
	return (
		<section id="projects" className="py-20">
			<h1 className="heading">
					Hear from <span className="text-primary">people</span> who know me
			</h1>

			<div className="flex flex-wrap items-center justify-center w-full gap-16 mt-10">
				<AnimatedTestimonials testimonials={testimonials}/>
			</div>
		</section>
	)
}