import { Outlet } from 'react-router-dom';
import { MainNavigation } from '../../components/MainNavigation/index';


export const RootPage = () => {
    

    return (
    <>
        <MainNavigation />

        <Outlet />
    </>
    )
}