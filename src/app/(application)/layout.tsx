import { Footer } from "@/components/platfrom/footer";
import Navbar from "@/components/platfrom/nav-bar";
import { IchildProps } from "@/types/types";

const HomeLayout = ({ children }: IchildProps ) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
           
        </>
    );
};

export default HomeLayout;
