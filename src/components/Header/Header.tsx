import Layout from "../UI/Layout";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BasicButton from "../UI/BasicButton";
import Selector from "../UI/Selector";

const Header = () => {
  return (
    <div className="w-full bg-[#3CB6D3] text-white">
      <Layout>
        <div className="w-full flex justify-between  px-2">
          <div className="flex space-x-5 items-center">
            <div>
              <MenuIcon />
            </div>
            <div className="text-xl font-semibold">Rentals.Ca</div>
            <div className="hidden md:flex space-x-3 text-lg pl-2 text-zinc-200">
              <div>Report</div>
              <div>Blog</div>
            </div>
          </div>
          <div className=" hidden md:flex space-x-3 items-center">
            <div className="text-zinc-200 text-lg">Login</div>
            <div className="">
              <Selector />
            </div>
            <div className="">
              <BasicButton title="Post a Rental" />
            </div>
          </div>
          <div className="md:hidden">
            <BasicButton title="Search">
              <span>
                <SearchIcon />
              </span>
            </BasicButton>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Header;
