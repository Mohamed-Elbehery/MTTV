import { HiLockClosed } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useUser } from "../context/user";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(useGSAP);

export default function BookingModal({
  isBookingModalShown,
  handleModalClose,
}: {
  isBookingModalShown: boolean;
  handleModalClose: () => void;
}) {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useGSAP(() => {
    gsap.fromTo(
      ".booking-modal",
      { opacity: 0, top: "40%" },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.25,
        ease: "none",
        top: "50%",
      }
    );

    gsap.to(".overlay", {
      opacity: 1,
      ease: "none",
    });
  }, [isBookingModalShown]);

  function validateEmail(email: string): boolean {
    return emailRegex.test(email);
  }

  return (
    isBookingModalShown && (
      <>
        <div
          className="z-50 overlay opacity-0 fixed inset-0 bg-black bg-opacity-75"
          onClick={handleModalClose}
        />
        <div className="z-50 booking-modal fixed left-1/2 top-[calc(50% - 5px)] -translate-x-1/2 -translate-y-[calc(50%)] rounded-lg bg-[#17253A]">
          <div className="absolute top-3 right-4">
            <HiXMark
              onClick={handleModalClose}
              className="text-3xl cursor-pointer hover:opacity-65"
            />
          </div>

          <div className="space-y-2 font-almarai px-6 py-8 pt-14">
            <h1 className="text-center text-4xl font-bold">
              احجز مقعدك في التدريب المجاني
            </h1>
            <p className="text-center text-xl">
              دخل بياناتك عشان تدخل التدريب المجاني
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-y-6 bg-white px-6 py-6"
          >
            <div>
              <input
                dir={"ltr"}
                type="text"
                className="pl-4 text-left outline-none border border-gray-400 rounded-md p-2 w-full text-secondary placeholder:text-secondary placeholder:opacity-75"
                placeholder="اسمك"
                autoComplete="name"
                required
                value={user.name}
                onChange={(e) =>
                  setUser({
                    name: e.target.value,
                    email: user.email,
                    phone: user.phone,
                  })
                }
              />
            </div>
            <div>
              <input
                type="email"
                dir={"ltr"}
                className="pl-4 text-left outline-none border border-gray-400 rounded-md p-2 w-full text-secondary placeholder:text-secondary placeholder:opacity-75"
                placeholder="ايميلك"
                autoComplete="email"
                required
                value={user.email}
                onChange={(e) =>
                  setUser({
                    name: user.name,
                    email: e.target.value,
                    phone: user.phone,
                  })
                }
              />
            </div>
            <div>
              <input
                dir={"ltr"}
                className="pl-4 outline-none border border-gray-400 rounded-md p-2 w-full text-secondary placeholder:text-secondary placeholder:opacity-75"
                placeholder="رقم التليفون"
                type="tel"
                autoComplete="tel"
                required
                value={user.phone}
                onChange={(e) =>
                  setUser({
                    name: user.name,
                    email: user.email,
                    phone: e.target.value,
                  })
                }
              />
            </div>
            <button
              onClick={() => {
                if (user.name && validateEmail(user.email) && user.phone) {
                  navigate("videotraining");
                }
              }}
              className={`flex items-center justify-center gap-x-3 bg-primary text-secondary text-2xl font-cairo font-bold w-full py-3 rounded-lg`}
            >
              اضغط للدخول للمحاضرة المجانية
            </button>
            <p className="flex items-center justify-center gap-x-2 text-center text-gray-500 text-[17px]">
              <HiLockClosed className="text-xl" />
              احنا بنحترم خصوصيتك, معلوماتك في امان
            </p>
          </form>
          <div className="px-6 py-8">
            <p className="text-center">
              التدريب متاح لمدة 24 ساعة من دخولك, ادخل دلوقتي
            </p>
          </div>
        </div>
      </>
    )
  );
}
