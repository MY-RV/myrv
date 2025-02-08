'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ExternalLinks } from "../externalLinks/ExternalLinks";
import BoderSpotlight from "../BorderSpotLight/BorderSpotLigth";

interface Item {
  url?: string;
  icon?: any;
  description?: string;
}

interface Props {
  startDate: string;
  endDate: string;
  name: string;
  description: string;
  stack: string[];
  items?: Item[];
  url: string;
}

export const ExperienceCard = ({
  startDate,
  endDate,
  name,
  description,
  stack,
  items,
  url,
}: Props) => {
  return (
    <BoderSpotlight>
      <div className="group flex flex-col gap-4 rounded w-full p-4 border border-transparent custom-border-gradient lg:hover:shadow-sm lg:hover:bg-[#dedcff0a] transition-colors duration-200 h-full">
        <div className=" min-w-24 z-10 mt-1 text-xs uppercase tracking-wide text-white/65 sm:col-span-2">
          <label>
            {startDate} - {endDate}
          </label>
        </div>
        <div>
          <Link href={url} className="flex">
            <h3 className="group-hover:text-[#67ff79] font-medium leading-snug text-slate-200 inline-block">
              {name}
            </h3>
          </Link>
          <p className="mt-2 text-sm leading-normal text-[#787878]">
            {description}
          </p>
          <ExternalLinks items={items} />
          <div className="flex gap-2 flex-wrap mt-3">
            {stack.map((item, index) => {
              return (
                <span
                  className=" flex min-w-20 justify-center items-center rounded-full bg-[#67ff6f15] px-3 py-1 text-xs font-medium leading-5 text-[#2ecd58] "
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </BoderSpotlight>
  );
};
