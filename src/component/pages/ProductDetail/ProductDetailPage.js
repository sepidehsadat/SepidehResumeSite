import React from 'react';
// import { useParams } from 'react-router-dom';
import Data from '../../../api/Data'

const ProductDetailPage = () =>
{
	// const { productId } = useParams < { productId} > ();

	
	const products = Data.getProjects()

	const product = products.find(p => p.key == "1");

	if (!product)
	{
		return <div>محصولی یافت نشد</div>;
	}

	return (
		<div>
			<h1>{product.title}</h1>
			<p>{product.description}</p>
			<div>
				{/* {product.images.map((image, index) => (
					<img key={index} src={image} alt={`Product Image ${index + 1}`} />
				))} */}
			</div>
		</div>
	);
};

export default ProductDetailPage;
