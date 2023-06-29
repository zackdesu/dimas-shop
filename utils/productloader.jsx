import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loader() {
  return (
	<>
	<SkeletonTheme baseColor="#f0f0f0" highlightColor="#ccc" inline="false">
      <div className="flex max-lg:flex-col justify-between my-5">
      <div className="flex max-sm:flex-col justify-between">
        <div className="w-[250px] h-[250px] max-md:w-[200px] max-md:h-[200px] max-sm:w-full max-sm:h-[200px]">
        <Skeleton width="100%" height="100%"/></div>
        <div className="lg:hidden mt-3">
        <h1><Skeleton containerClassName="flex-1"/></h1>
          <p className="flex items-center mb-10 max-sm:mb-4">
            <Skeleton containerClassName="flex-1"/>
          </p>
          <h1>
            <Skeleton containerClassName="flex-1"/>
          </h1>
          </div>
          
        </div>
          <div className="mx-2 my-5 lg:hidden">
            <Skeleton containerClassName="flex-1" height={62}/>
        </div>
        <div className="min-[1440px]:w-6/12 xl:w-5/12 lg:w-4/12 lg:overflow-y-auto lg:max-h-[80vh] p-1 flex flex-col">
          <div className="max-lg:hidden">
        <h1><Skeleton containerClassName="flex-1"/></h1>
          <p className="flex items-center mb-10 max-sm:mb-4">
           <Skeleton containerClassName="flex-1" width={160}/>
          </p>
          <h1>
            <Skeleton containerClassName="flex-1"/>
          </h1>
          </div>
      <h2 className="mt-20 mb-3 max-sm:mt-10"><Skeleton containerClassName="flex-1"/></h2>
      <div className="text-left max-lg:w-1/2 max-sm:w-full">
          <Skeleton containerClassName="flex-1" count={4} className="mb-3"/>
      </div>
      <p className="mt-5 max-sm:mb-10"><Skeleton containerClassName="flex-1" count={15} className="mb-2"/></p>
        </div>
        <div className="mx-2 max-sm:my-5 max-lg:hidden">
        <div className="p-5 border border-black rounded">
        <Skeleton containerClassName="flex-1" height={86}/>
          <div className="bg-zinc-300 my-10 rounded flex justify-between py-2 px-5 w-[250px]">
          <b><Skeleton containerClassName="flex-1"/></b>
            <Skeleton containerClassName="flex-1"/>
          </div>
        </div>
        </div>
      </div>
	  </SkeletonTheme>
      </>
  );
}
