import React from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function VideoTraining() {
  const navigate = useNavigate();

  return (
    <section className="px-4 sm:px-0 overflow-hidden">
      <h1 className="text-center font-almarai font-bold w-full max-w-[1140px] mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-8">
        الخطوة الأولى : اتفرج على التدريب المجاني
      </h1>

      <div className='h-[641.25px] max-[1180px]:h-[430px] max-[1180px]:w-[740px] max-[768px]:w-[400px] max-[768px]:h-[230px] max-[450px]:w-[260px] max-[450px]:h-[150px] mx-auto'>
        <div className="wistia_responsive_padding w-[1140px] mx-auto h-[641.25px] max-[1180px]:h-[430px] max-[1180px]:w-[740px] max-[768px]:w-[400px] max-[768px]:h-[230px] max-[450px]:w-[260px] max-[450px]:h-[150px]" style={{ position: 'relative' }}>
          <div className="wistia_responsive_wrapper" style={{ left: 0, position: 'absolute', top: 0, width: '100%' }}>
            <div className="wistia_embed wistia_async_zwl86a6hbn seo=true videoFoam=true" style={{ position: 'relative', width: '100%' }}>
              <div className="wistia_swatch" style={{ left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                <img src="https://fast.wistia.com/embed/medias/zwl86a6hbn/swatch" style={{ filter: 'blur(5px)', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" onLoad={(e) => { (e.target as HTMLElement).parentElement!.style.opacity = '1'; }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="h-[641.25px] max-[1180px]:h-[430px] max-[1180px]:w-[740px] max-[768px]:w-[400px] max-[768px]:h-[230px] max-[450px]:w-[260px] max-[450px]:h-[150px] mx-auto">
        <div
          className="wistia_responsive_padding w-[1140px] mx-auto h-[641.25px] max-[1180px]:h-[430px] max-[1180px]:w-[740px] max-[768px]:w-[400px] max-[768px]:h-[230px] max-[450px]:w-[260px] max-[450px]:h-[150px]"
          style={{ position: "relative" }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              left: 0,
              position: "absolute",
              top: 0,
              width: "100%",
            }}
          >
            <div
              className="wistia_embed wistia_async_6cwzd1fkyi seo=true videoFoam=true"
              style={{ position: "relative", width: "100%" }}
            >
              <div
                className="wistia_swatch"
                style={{
                  left: 0,
                  opacity: 0,
                  overflow: "hidden",
                  position: "absolute",
                  top: 0,
                  transition: "opacity 200ms",
                  width: "100%",
                }}
              >
                <img
                  src="https://fast.wistia.com/embed/medias/6cwzd1fkyi/swatch"
                  style={{
                    filter: "blur(5px)",
                    objectFit: "contain",
                    width: "100%",
                  }}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <h2 className="text-center font-almarai font-bold w-full max-w-[1140px] mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-8 mb-4 relative z-50">
        الخطوة الثانية : احجز سيشن مجاني عشان اساعدك تزود مبيعاتك
      </h2>

      <div className="flex flex-col justify-center items-center gap-y-8 relative z-50">
        <FaChevronDown className="text-4xl" />

        <button
          onClick={() => navigate("/questionnare")}
          className="flex items-center justify-center gap-x-3 bg-primary text-secondary text-2xl sm:text-3xl md:text-4xl font-cairo font-bold w-full max-w-[570px] py-3 rounded-lg transition duration-500 hover:scale-110 max-[768px]:max-w-[475px] max-[450px]:text-xl"
        >
          <BiPhoneCall />
          احجز مكالمتك المجانية
        </button>
      </div>
    </section>
  );
}
