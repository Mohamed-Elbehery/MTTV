import gsap from 'gsap';
import { InlineWidget } from 'react-calendly';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger)

const Schedule: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mt-8 text-center">Schedule a Meeting</h1>

      {/* Calendly Widget */}
      <div className="w-full h-[1000px]">
        <InlineWidget
          url="https://calendly.com/abdullrhman-sayed"
          styles={{
            height: '100%',
            width: '100%',
            position: "relative"
          }}
        />
      </div>
    </div>
  );
};

export default Schedule;
