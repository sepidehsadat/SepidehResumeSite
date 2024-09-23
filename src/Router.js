import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesConfig from "./Routes"; 
import SMLayout from "./component/SMLayout";
import HomePage from "./component/pages/Home/HomePage";
import ProjectDetailPage from "./component/pages/ProjectDetail/ProjectDetailPage";

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
					path={RoutesConfig.ProjectDetail}
					element={
						<SMLayout>
							<ProjectDetailPage />
						</SMLayout>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;