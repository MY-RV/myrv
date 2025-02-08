import React from "react";

import { ExternalLinks } from "../externalLinks/ExternalLinks";
import Image from "next/image";
import Link from "next/link";
import BoderSpotlight from "../BorderSpotLight/BorderSpotLigth";
interface Item {
  url?: string;
  icon?: string;
  description?: string;
}

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

interface Props {
  name: string;
  description: string;
  image: StaticImageData;
  items?: Item[];
  url: string;
}

export const ProjectCard = ({
  name,
  description,
  image,
  items,
  url,
}: Props) => {
  return (
    <BoderSpotlight>
      <div className="overflow-clip group flex flex-col justify-between gap-4 rounded w-full px-4 pt-4 border border-transparent custom-border-gradient lg:hover:shadow-sm lg:hover:bg-[#928ec40a] transition-colors duration-200 h-full">
        <div>
          <Link className="flex" href={url}>
            <h3 className="group-hover:text-[#2ecd58] font-medium leading-snug text-slate-200 inline-block">
              {name}
            </h3>
          </Link>
          <p className="mt-2 text-sm leading-normal text-[#787878]">
            {description}
          </p>
        </div>
        <div>
          <Image src={image} alt={""} className="h-full w-full object-cover " />
        </div>
      </div>
    </BoderSpotlight>
  );
};
