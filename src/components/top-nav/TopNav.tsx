import { TOP_MENU } from "@/constant/menu";
import Link from "next/link";

const TopNav = () => {
  return (
    <div className="bg-blue-300 h-20 w-full text-black px-4 flex items-center">
      <p className="font-semibold text-lg">Air Quality</p>
      <div className="ml-auto flex space-x-6">
        {TOP_MENU.map((menu) => (
          <Link
            href={menu.link}
            key={menu.label}
            className="capitalize hover:underline"
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
