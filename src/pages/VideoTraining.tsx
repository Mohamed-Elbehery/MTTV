import { BiPhoneCall } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function VideoTraining() {
  const navigate = useNavigate();

  return (
    <section className="max-[450px]:px-0 px-4 sm:px-0 overflow-hidden min-h-screen">
      <div className="flex flex-col items-center justify-center gap-6 my-8">
        <h2 className="first-content text-center text-base sm:text-lg xl:text-2xl">
          **للمبتدئين وأصحاب الخبرات في التجارة الالكترونيه فقط**
        </h2>
        <h1 className="first-content text-center text-2xl sm:text-3xl md:text-4xl xl:text-[70px] text-primary font-bold font-almarai !leading-[1.45]">
          خمس خطوات لدخل يفوق
          <br />
          ال 20 الف جنيه شهرياً
        </h1>
      </div>

      <h1 className="text-center font-almarai font-extralight w-full max-w-[1140px] mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl my-8 text-gray-200">
        <span className="font-bold text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          الخطوة الأولى
        </span>{" "}
        : اتفرج على التدريب المجاني
      </h1>

      <div className="max-[450px]:w-[90%] w-[80%] mx-auto">
        <div
          className="wistia_responsive_padding"
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: "100%",
              left: "0",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          >
            <div
              className="wistia_embed wistia_async_31jxpprfsf seo=true videoFoam=true"
              style={{
                height: "100%",
                position: "relative",
                width: "100%",
              }}
            >
              <div
                className="wistia_swatch"
                style={{
                  height: "100%",
                  left: "0",
                  opacity: "0",
                  overflow: "hidden",
                  position: "absolute",
                  top: "0",
                  transition: "opacity 200ms",
                  width: "100%",
                }}
              >
                <img
                  src="https://fast.wistia.com/embed/medias/31jxpprfsf/swatch"
                  style={{
                    filter: "blur(5px)",
                    height: "100%",
                    objectFit: "contain",
                    width: "100%",
                  }}
                  aria-hidden="true"
                  onLoad={(e) =>
                    ((
                      (e.target as HTMLImageElement).parentNode as HTMLElement
                    ).style.opacity = "1")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center font-almarai font-extralight w-full max-w-[1140px] mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl my-8 relative z-50 text-gray-200">
        <span className="font-bold text-secondary mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          الخطوة الثانية
        </span>{" "}
        : احجز سيشن مجاني عشان اساعدك تزود مبيعاتك
      </h2>

      <div className="flex flex-col justify-center items-center gap-y-8 relative z-50 pb-4">
        <FaChevronDown className="text-4xl animate-bounce" />
        <button
          onClick={() => navigate("/questionnare")}
          className="flex items-center justify-center gap-x-3 bg-primary text-secondary text-2xl sm:text-3xl md:text-4xl font-cairo font-bold w-full max-w-[570px] py-3 rounded-lg transition duration-500 hover:scale-110 max-[768px]:max-w-[475px] max-[500px]:max-w-[370px] max-[375px]:max-w-[280px] max-[450px]:text-xl"
        >
          <BiPhoneCall />
          احجز مكالمتك المجانية
        </button>
      </div>
    </section>
  );
}
