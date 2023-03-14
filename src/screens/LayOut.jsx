import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LoadingImage from "../image/Loading.gif";

function Loading() {
  return (
    <div className="loading-screen">
      <img src={LoadingImage} alt="" />
    </div>
  );
}

export default function LayOut() {
  return (
    <div className="Layout">
      <Suspense fallback={<Loading />}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </div>
  );
}
