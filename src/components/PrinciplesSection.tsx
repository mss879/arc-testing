"use client";

const PrinciplesSection = () => {

  const splitTextIntoWords = (text: string) => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} style={{ whiteSpace: 'nowrap' }}>
        {word.split('').map((char, charIndex) => (
          <span
            key={charIndex}
            style={{
              display: 'inline-block',
              opacity: 1,
              transform: 'none',
              willChange: 'transform'
            }}
          >
            {char}
          </span>
        ))}
        {wordIndex < text.split(' ').length - 1 && ' '}
      </span>
    ));
  };

  return (
    <section className="relative bg-black py-20 md:py-32" id="principles">
      <div className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Number */}
            <div className="lg:w-1/3 flex justify-center lg:justify-start">
              <h2
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white"
                style={{
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>
                  <span style={{ display: 'inline-block' }}>0</span>
                  <span style={{ display: 'inline-block' }}>1</span>
                  <span style={{ display: 'inline-block' }}>.</span>
                </span>
              </h2>
            </div>

            {/* Content */}
            <div className="lg:w-2/3">
              <div className="space-y-8">
                <div style={{ transform: 'none' }}>
                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 text-center lg:text-left"
                    style={{
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {splitTextIntoWords('Built with Vision.')}
                  </h2>
                </div>

                <div style={{ transform: 'none' }}>
                  <p
                    className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl text-center lg:text-left mx-auto lg:mx-0"
                    style={{
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    <span className="block">
                      {splitTextIntoWords("Every brand we build starts with")}
                    </span>
                    <span className="block">
                      {splitTextIntoWords("strategy and bold ideas. We design for growth.")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
