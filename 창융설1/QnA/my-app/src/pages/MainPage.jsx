import { React } from 'react'
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import MainContents from "../components/MainContents.jsx";

const MainPage = () => {
    return (
    <>
        <Header />
        <Sidebar />
        <MainContents />
    </>
    );
}

export default MainPage;