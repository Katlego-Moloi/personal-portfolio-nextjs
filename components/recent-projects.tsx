import React from 'react'
import { projects } from '@/data'
import { CometCard } from './ui/comet-card'
import { FaLocationArrow } from "react-icons/fa";

export const RecentProjects = () => {
	return (
		<section id="projects" className="py-10">
			<h1 className="heading">
				A small selection of {''}
				<span className="text-primary">
					Recent Projects
				</span>
			</h1>

			<div className="flex flex-wrap items-center justify-center w-full gap-16 mt-10">
				{projects.map(({ id, title, des, img, iconLists, link }) => (
					<div key={id} className="lg-h-[30rem] h-[50vh] flex items-center justify-center w-[28rem]">
						<CometCard>
							<div className="relative flex items-center justify-center w-full overflow-hidden lg-h-[17rem] h-[28vh] mb-8">
	              <div className="relative w-full h-full overflow-hidden rounded-3xl">
	                <img src="/images/bg.png" alt="bgimg" />
	              </div>

	              <img
	                src={img}
	                alt="cover"
	                className="absolute z-10 bottom-0 rounded-xl w-full"
	              />
				      </div>

	            <div className="px-5 pb-3	">
		            <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
		              {title}
		            </h1>

	              <p className="lg:text-l lg:font-normal font-light text-sm line-clamp-2"
	                style={{ color: "#BEC1DD", margin: "1vh 0"}}>
	                {des}
	              </p>

	              <div className="flex items-center justify-between mt-7 mb-3 w-full">
	                <div className="flex items-center">
	                  {iconLists.map((icon, index) => (
	                    <div
	                      key={index}
	                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
	                      style={{
	                        transform: `translateX(-${5 * index + 2}px)`,
	                      }}
	                    >
	                      <img src={icon} alt="icon5" className="p-2" />
	                    </div>
	                  ))}
	                </div>

	                <a href={link} target="_blank" rel="noopener noreferrer">
		                <div className="flex justify-center items-center">
		                  <p className="flex lg:text-l md:text-xs text-sm text-purple">
		                    Check Live Site
		                  </p>
		                  <FaLocationArrow className="ms-3" color="#CBACF9" />
	                	</div>
	                </a>
		            </div>	             
	            </div>
						</CometCard>
					</div>))}
			</div>
		</section>
	)
}