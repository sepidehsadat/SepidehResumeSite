import React from 'react';
// import { useParams } from 'react-router-dom';
import Data from '../../../api/Data'

const ProjectDetailPage = () =>
{
	// const { productId } = useParams < { productId} > ();


	const projects = Data.getProjects()

	const project = projects.find(p => p.key == "3");

	if (!project)
	{
		return <div>محصولی یافت نشد</div>;
	}

	return (
		<div className='container py-4'>
			{/* <h1>{project.title}</h1>
			<p>{project.description}</p> */}
			<div>
				{/* {product.images.map((image, index) => (
					<img key={index} src={image} alt={`Product Image ${index + 1}`} />
				))} */}
			</div>
			<h3>Coming Soon</h3>
		</div>
	);
};

export default ProjectDetailPage;
