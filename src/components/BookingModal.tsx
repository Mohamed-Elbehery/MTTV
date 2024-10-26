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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const msg = `<div style="background-color: #fff; color: #000; padding: 12px">
      <p style="margin: 12px 0;">Name : ${user.name}</p>
      <p style="margin: 12px 0;">Email : ${user.email}</p>
      <p style="margin: 12px 0;">Phone : ${user.phone}</p>
      </div>`;

    await fetch("https://sendmail-api-docs.vercel.app/api/send", {
      method: "POST",
      body: JSON.stringify({
        to: "abdojudo123456@gmail.com",
        subject: `Booking a Seat - ${user.email.toString()}`,
        message: msg,
      }),
    });

    navigate("/videotraining");
  }

  return (
    isBookingModalShown && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="z-50 overlay opacity-0 fixed inset-0 bg-black bg-opacity-75"
          onClick={handleModalClose}
        />

        <div className="z-50 booking-modal fixed left-1/2 top-[calc(50% - 5px)] -translate-x-1/2 -translate-y-[calc(50%)] rounded-lg bg-primary w-[540px] max-[600px]:w-[90%]">
          <div className="absolute top-3 right-4">
            <HiXMark
              onClick={handleModalClose}
              className="text-3xl cursor-pointer hover:opacity-65"
            />
          </div>

          <div className="space-y-2 font-almarai px-6 py-8 pt-14 max-[600px]:space-y-4 max-[600px]:px-4 max-[600px]:pt-8 max-[600px]:pb-4">
            <h1 className="text-center text-xl sm:text-4xl font-bold max-[600px]:hidden">
              احجز مقعدك في التدريب المجاني
            </h1>
            <p className="text-center text-base sm:text-lg">
              دخل بياناتك عشان تدخل التدريب المجاني
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-6 bg-white px-6 py-6 max-[600px]:px-4 max-[600px]:py-4 max-[600px]:gap-y-4"
          >
            <div className="space-y-2">
              <label className="text-gray-500" htmlFor="name">
                اسمك
              </label>
              <input
                type="text"
                dir="ltr"
                id="name"
                className="pl-4 text-left outline-none border border-gray-400 rounded-md p-2 w-full text-gray-500 placeholder:opacity-75"
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
            <div className="space-y-2">
              <label className="text-gray-500" htmlFor="email">
                ايميلك
              </label>
              <input
                id="email"
                dir="ltr"
                name="email"
                className="pl-4 text-left outline-none border border-gray-400 rounded-md p-2 w-full text-gray-500 placeholder:opacity-75"
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
            <div className="space-y-2">
              <label className="text-gray-500" htmlFor="phone-number">
                رقم التليفون
              </label>
              <input
                id="phone-number"
                name="phone"
                type="tel"
                dir="ltr"
                className="pl-4 outline-none border border-gray-400 rounded-md p-2 w-full text-gray-500 placeholder:opacity-75"
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
              className={`flex items-center justify-center gap-x-3 bg-primary hover:bg-[#7e1a2e] transition text-secondary text-base sm:text-2xl font-cairo font-bold w-full py-3 rounded-lg`}
            >
              اضغط للدخول للمحاضرة المجانية
            </button>
            <p className="flex sm:items-center justify-center gap-x-2 text-center text-gray-500 text-sm sm:text-[17px]">
              <HiLockClosed className="text-xl" />
              احنا بنحترم خصوصيتك, معلوماتك في امان
            </p>
          </form>
          <div className="px-6 py-8">
            <p className="text-center text-sm sm:text-base">
              التدريب متاح لمدة 24 ساعة من دخولك, ادخل دلوقتي
            </p>
          </div>
        </div>
      </div>
    )
  );
}
