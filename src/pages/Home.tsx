import { FaCheck } from "react-icons/fa";
import ABDO from "../assets/personal_photo.webp";
import AttendButton from "../components/AttendButton";
import { homePageQuestions } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import BookingModal from "../components/BookingModal";
import { useUser } from "../context/user";
gsap.registerPlugin(useGSAP);

const Home = () => {
  const [isBookingModalShown, setIsBookingModalShown] = useState(false);
  const { setUser } = useUser();

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.25,
    });

    tl.fromTo(".home-header", { y: -20 }, { y: 0 });

    tl.fromTo(
      ".first-content",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
      }
    );

    tl.fromTo(
      ".questions-container",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
      }
    );
  }, []);

  const handleModalClose = () => {
    gsap.to(".booking-modal", {
      opacity: 0,
      duration: 0.5,
      ease: "none",
      top: "35%",
      onComplete: () => setIsBookingModalShown(false),
    });

    gsap.to(".overlay", {
      opacity: 0,
      duration: 0.5,
      ease: "none",
      delay: 0.25,
    });
  };

  useEffect(() => {
    setUser({ name: "", email: "", phone: "" });
  }, [setUser]);

  return (
    <>
      <BookingModal
        handleModalClose={handleModalClose}
        isBookingModalShown={isBookingModalShown}
      />

      <div className="flex flex-col items-center justify-center gap-6 my-8">
        <h2 className="first-content text-center text-base sm:text-lg xl:text-2xl">
          **للمبتدئين وأصحاب الخبرات في التجارة الالكترونيه فقط**
        </h2>
        <h1 className="first-content text-center text-2xl sm:text-3xl md:text-4xl xl:text-[70px] text-primary font-bold font-almarai !leading-[1.45]">
          خمس خطوات لدخل يفوق
          <br />
          ال 20 الف جنيه شهرياً
        </h1>
        <div className="first-content w-full flex justify-center">
          <AttendButton className="max-[1180px]:max-w-[720px] max-[768px]:max-w-[475px] max-[500px]:max-w-[270px]" handleModalOpen={() => setIsBookingModalShown(true)} />
        </div>
      </div>

      <div className="w-[1140px] mx-auto flex flex-col items-center gap-y-8 md:gap-y-0 md:items-start md:flex-row max-[1180px]:w-[840px] max-[910px]:w-[640px] max-[768px]:w-full max-[768px]:px-4">
        <ul className="questions-container flex flex-col justify-center md:justify-normal font-almarai gap-y-20 font-bold sm:text-lg md:text-xl xl:text-2xl pt-8">
          {homePageQuestions.map((desc, idx: number) => (
            <li
              key={`${idx + 1} - ${desc}`}
              className="flex items-center md:items-start justify-center text-center gap-x-3 w-full mx-auto md:max-w-[85%]"
            >
              <div>
                <FaCheck className="bg-primary text-secondary w-10 h-10 p-2 rounded-full" />
              </div>
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        <div className="questions-container w-full max-w-[75%] max-[910px]:max-w-full space-y-4">
          <img loading="eager" className="w-full rounded-md h-[450px] object-cover" src={ABDO} alt="Abdo's Photo" />
          <h3 className="text-center leading-6 font-montserrat font-semibold tracking-wide">
            Abdelrahman Sayed the founder of{" "}
            <span className="underline text-primary">MTTV</span>
          </h3>
        </div>
      </div>
      <div className="questions-container flex justify-center my-8">
        <AttendButton
          className="max-[1180px]:max-w-[620px] max-[768px]:max-w-[425px] max-[500px]:max-w-[270px]"
          handleModalOpen={() => setIsBookingModalShown(true)}
        />
      </div>
    </>
  );
};

export default Home;
