import Link from "next/link";
import React from "react";
import AppLogo from "./AppLogo";
import Image from "next/image";
import SearchBar from "../inputs/SearchBar";

const curentUser = {
  id: "1",
  firstname: "Christian",
  lastname: "Lugod",
  profile: "profile-1.jpg",
};

const AppNavbar = () => {
  return (
    <div className="flex items-center fixed z-10 w-screen px-8 py-5">
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
