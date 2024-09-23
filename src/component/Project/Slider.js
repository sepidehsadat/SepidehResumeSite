import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import
	{
		Navigation,
		Pagination,
		Scrollbar,
		A11y,
		Autoplay,
		EffectCoverflow,
	} from 'swiper'
import ProjectItem from '../../component/Project/ProjectItem'
import Data from '../../api/Data'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
//css

export default class Slider extends Component
{
	render()
	{
		const projects = Data.getProjects()
		return (
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
				effect="coverflow"
				spaceBetween={50}
				slidesPerView={3}
				autoplay={{ delay: 17000, }}
				navigation
				pagination={{ clickable: true }}
				// scrollbar={{ draggable: true }}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{projects.map((item, j) =>
				{
					return (
						<SwiperSlide>
							<ProjectItem
								item={item}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		)
	}
}
