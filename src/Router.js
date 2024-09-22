import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesConfig from "./Routes"; // تغییر نام از Routes به RoutesConfig
import SMLayout from "./component/SMLayout";
import HomePage from "./component/pages/Home/HomePage";
import ProductDetailPage from "./component/pages/ProductDetail/ProductDetailPage";

const AppRouter = () =>
{
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path={RoutesConfig.Home}
					element={
						<SMLayout>
							<HomePage />
						</SMLayout>
					}
				/>
				<Route
					path={RoutesConfig.ProductDetail}
					element={
						<SMLayout>
							<ProductDetailPage />
						</SMLayout>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;