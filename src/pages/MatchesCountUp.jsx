import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const MatchesCountUp = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [trigger, setTrigger] = useState(false); // For re-rendering CountUp

  const stats = [
    { label: 'Cricket Matches', value: 120 },
    { label: 'Football Matches', value: 85 },
    { label: 'Volleyball Matches', value: 45 },
    { label: 'Tennis Matches', value: 60 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        setVisible(isVisible);
        if (isVisible) {
          // Toggle trigger to re-render CountUp
          setTrigger(prev => !prev);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-12">Total Matches Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={`${stat.label}-${trigger}`} // re-mount on each trigger
              className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-5xl font-extrabold text-blue-600 mb-2">
                {visible ? <CountUp end={stat.value} duration={2} /> : '0'}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchesCountUp;
