import Image from "next/image";
import { Roboto } from "next/font/google";
import { ListIcon } from "@/components/icons";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  return (
    <main
      className={` h-screen   bg-white lg:bg-dark-slate-grey ${roboto.className}`}
    >
      <div className="flex w-full lg:justify-center lg:items-center lg:h-full lg:px-[100px]  ">
        <div className="flex w-screen text-dark-slate-grey  lg:bg-white lg:rounded-2xl lg:p-4 max-w-[1000px] lg:items-center lg:justify-between">
          <div className="w-full lg:w-1/2">
            <Image
              alt="hero-image"
              src="/assets/images/illustration-sign-up-mobile.svg"
              height={500}
              width={500}
              className="w-full lg:hidden"
            ></Image>
            <div className="px-6">
              <h1 className="mt-4 font-bold text-4xl">Stay Updated!</h1>
              <p className="my-6">
                Join 60.000+ product managers receiving monthly updates on :
              </p>
              <ul className="my-8 flex flex-col gap-4 ">
                {[
                  {
                    icon: <ListIcon></ListIcon>,
                    content: "Product discovery and building what matters",
                  },
                  {
                    icon: <ListIcon></ListIcon>,
                    content: "Measuring to ensure updates are a success",
                  },
                  {
                    icon: <ListIcon></ListIcon>,
                    content: "And much more!",
                  },
                ].map((item) => (
                  <>
                    <li className="flex gap-4">
                      {item.icon} {item.content}
                    </li>
                  </>
                ))}
              </ul>
              <form className="flex flex-col mb-10">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-bold">
                    Email Address :
                  </label>
                  <input
                    type="email"
                    className="border border-grey rounded-md mt-2 p-2"
                  />
                </div>
                <div>
                  <button
                    className="font-extrabold px-4 py-4 bg-dark-slate-grey w-full mt-4 rounded-md mb-10 text-white"
                    type="submit"
                  >
                    Subscribe to Our Newsletter
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <Image
              alt="hero-image-desktop"
              src="/assets/images/illustration-sign-up-desktop.svg"
              height={400}
              width={400}
              className=" max-lg:hidden "
            ></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
