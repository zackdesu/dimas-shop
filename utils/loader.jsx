import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loader() {
  return (
    <div>
      <div className="max-md:w-32 max-md:h-48 w-48 h-64 bg-[#d9d9d9] rounded max-sm:p-1 p-2 mr-4 items-center text-center">
        <SkeletonTheme baseColor="#f0f0f0" highlightColor="#ccc" inline="false">
          <div className="w-[95%] mx-auto">
            <Skeleton height={110} />
          </div>
          <div className="max-sm:my-2 max-md:my-3 my-5 items-center">
            <p className="font-semibold text-xs md:text-base mx-auto w-8">
              <Skeleton width="80%" />
            </p>
            <p className="text-xs md:text-sm mx-auto w-4 mt-2">
              <Skeleton width="40%" />
            </p>
            <p className="mt-5 mx-auto w-6">
              <b>
                <Skeleton width="80%" />
              </b>
            </p>
          </div>
        </SkeletonTheme>
      </div>
    </div>
  );
}
