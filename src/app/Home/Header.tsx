import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4adcc6deb8cc5f476e62ae115e4748110963254c6ee83c4c79bee355450e8db1?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f"
        alt=""
        className="object-contain self-end mr-60 max-w-full aspect-[16.67] w-[182px] max-md:mr-2.5"
      />
      <div className="flex flex-col mt-28 w-full max-md:mt-10 max-md:mr-1 max-md:max-w-full">
        <div className="flex overflow-hidden items-start w-full bg-slate-900 max-w-[1433px] max-md:max-w-full">
          <div className="min-w-[240px] w-[1433px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                <div className="flex grow items-start pb-1.5 min-h-[798px] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c917bf59d194a2b5c7fb613407c4a5ea3e6b9ebfc2838e19ebf4d1be9abfb621?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f"
                    alt="Main header image"
                    className="object-contain aspect-[2.05] min-w-[240px] w-[1059px]"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto w-full mt-10 mr-15 text-sm font-bold tracking-wider leading-5 text-center text-white uppercase max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8f69f97f58e3f9defc73c6c00a750d6e87b57b297af28d92f5262853019e868?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f"
                    alt=""
                    className="object-contain w-full aspect-[0.93]"
                  />
                  <button className="py-6 pr-16 pl-16 mt-20 ml-10 w-24 bg-orange-500 rounded-2xl border-2 border-solid border-zinc-800 shadow-[3px_3px_0px_rgba(46,47,53,1)] max-md:px-5 max-md:mt-10 max-md:mr-0.5">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;