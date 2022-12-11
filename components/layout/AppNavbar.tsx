import Link from "next/link";
import React, {
  DOMElement,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import AppLogo from "./AppLogo";
import Image from "next/image";
import SearchBar from "../inputs/SearchBar";
import { useWindowScroll } from "react-use";

const curentUser = {
  id: "1",
  firstname: "Christian",
  lastname: "Lugod",
  profile: "profile-1.jpg",
};

type AppNavbarProps = {
  snapToElementId?: string;
};

const AppNavbar: FunctionComponent<AppNavbarProps> = ({
  snapToElementId = "homepageCarousel",
}) => {
  const navbarEl = useRef<any>(null);
  const parentClass = useState();
  const [snapHeight, setSnapHeight] = useState<number | undefined>(undefined);
  const { x, y } = useWindowScroll();

  useEffect(() => {
    if (snapToElementId) {
      const element = document.getElementById(snapToElementId);
      setSnapHeight(element?.clientHeight);
    }
  });

  return (
    <div
      ref={navbarEl}
      className={`flex transition-all items-center fixed z-30 w-screen px-8 py-5 ${
        snapHeight &&
        navbarEl &&
        y > snapHeight - navbarEl?.current?.clientHeight
          ? "bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 py-2 border-b-gray-200 border-1"
          : ""
      }`}>
      {}

      <Link className="mr-8" href={"/"}>
        <AppLogo />
      </Link>
      <SearchBar />
      <div className="rounded-full overflow-hidden h-[50px] w-[50px] ml-auto">
        <Image
          priority
          src={`/images/profiles/${curentUser.profile}`}
          width={100}
          height={100}
          alt={`${curentUser.firstname} ${curentUser.lastname}`}></Image>
      </div>
    </div>
  );
};

export default AppNavbar;
