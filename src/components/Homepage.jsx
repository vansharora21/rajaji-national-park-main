import { 
  Sun, MapPin, Gavel, ArrowRight, Calendar, MoveRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JungleSafariHome = () => {
  const navigate = useNavigate();

  const handleViewGallery = () => {
    navigate('/gallery');
  };
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[750px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKbAy43cNo8vEkadnyxIo4c2EfJwPSSacT7jpKrE25ON6_eGRXZiGTCR360OC85Oc2ErJah2i9v2X6-qfrkdNa_8A_qtv2mMQnfMZZ6v4YhfeNy41WUaj5L6wJX9QY8B6ko7twIemhUpl73f5bL0oiBt0OnSE5jlTnX3WJxtW23PhhI-0Tc8bsuqDCMcwUNO4D1eDV8DNLnnQR1zfNuYg05xAxAB8WuBLyfgBT4re0sPiYGbTFLSZIQNqDl5Ee31As4XI8m1HlO0o")`
          }}
        />
        <div className="relative z-10 flex flex-col gap-4 sm:gap-6 text-center max-w-4xl px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-black leading-tight tracking-[-0.03em] drop-shadow-lg">
            Unleash Your Wild Side
          </h1>
          <h2 className="text-white/90 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Experience the heart of the jungle. Witness nature in its purest form.
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-2 sm:mt-4">
            <button className="flex min-w-[140px] sm:min-w-[160px] cursor-pointer items-center justify-center rounded-full h-11 sm:h-12 px-6 sm:px-8 bg-green-500 hover:bg-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 text-white text-sm sm:text-base font-bold shadow-lg">
              <span>Explore Safari</span>
            </button>
            <button 
            onClick={handleViewGallery}
            className="flex min-w-[140px] sm:min-w-[160px] cursor-pointer items-center justify-center rounded-full h-11 sm:h-12 px-6 sm:px-8 bg-transparent border-2 border-white hover:bg-green-500/10 transition-all duration-300 hover:scale-105 text-white text-sm sm:text-base font-bold shadow-lg backdrop-blur-sm">
            
              <span>View Gallery</span>
            </button>
          </div>
        </div>
      </div>

      {/* Info Cards Strip */}
      <div className="relative -mt-12 sm:-mt-16 z-20 px-4 sm:px-6 md:px-10 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 flex items-start gap-3 sm:gap-4 hover:-translate-y-1 transition-all duration-300 hover:border-green-500/50 hover:shadow-green-500/10">
            <div className="bg-green-500/20 p-2 sm:p-3 rounded-full text-green-600 dark:text-green-400 flex-shrink-0 flex items-center justify-center">
              <Sun className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Timings</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">06:00 AM - 06:00 PM</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Open all days except Tuesday</p>
            </div>
          </div>
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 flex items-start gap-3 sm:gap-4 hover:-translate-y-1 transition-all duration-300 hover:border-green-500/50 hover:shadow-green-500/10">
            <div className="bg-green-500/20 p-2 sm:p-3 rounded-full text-green-600 dark:text-green-400 flex-shrink-0 flex items-center justify-center">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Zones</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Buffer, Core & River Safari</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Explore 5 distinct habitats</p>
            </div>
          </div>
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 flex items-start gap-3 sm:gap-4 hover:-translate-y-1 transition-all duration-300 hover:border-green-500/50 hover:shadow-green-500/10">
            <div className="bg-green-500/20 p-2 sm:p-3 rounded-full text-green-600 dark:text-green-400 flex-shrink-0 flex items-center justify-center">
              <Gavel className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Rules</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Do's & Don'ts Guide</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Strict conservation policies</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto" id="about">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16">
          <div className="w-full lg:w-1/2 relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-green-500 rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-all duration-500 opacity-20 -z-10" />
            <div 
              className="relative w-full aspect-[4/3] bg-cover bg-center rounded-[2rem] shadow-2xl overflow-hidden"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDX6n4TlnpPcuyadMgz0PUgBPZNwNGSl5LaMtMJ2WxW4O02sdgQFNfeKP8kONCTE_lHrM8agkdUp8fiDX0R9NvbKMoWbd238P2uIZKJCPMSREKHQj5TSXS6sTOc98lbr07HOCm7EH6C3L0um5ZSDhVa8q8b93vv2VB7cOi0HKIsbnlereazdFdcmjB5AiHjv0S5jvXBZjwL4XJCmLNhftL4oOLw-_RKuj07XoCi2CC-djRg-SBLqnhA7AQrLO7lckpBgv6sGFmHeeo")`
              }}
            >
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-900">Est. 1982</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 order-1 lg:order-2">
            <div className="flex flex-col gap-2">
              <span className="text-green-500 font-bold tracking-wider uppercase text-sm">Conservation First</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                The Sanctuary Legacy
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Dedicated to conservation and protecting our wildlife for generations to come. Discover the story behind the sanctuary, our efforts in anti-poaching, and how we maintain the delicate balance of the ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <div className="flex flex-col gap-1 border-l-4 border-green-500 pl-4">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">50+</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Tigers Protected</span>
              </div>
              <div className="flex flex-col gap-1 border-l-4 border-green-500 pl-4">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">120k</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Acres of Forest</span>
              </div>
            </div>
            <div className="pt-4">
              <button className="group flex items-center gap-2 text-gray-900 dark:text-white font-bold text-base sm:text-lg hover:text-green-500 transition-all duration-300">
                Read Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm" id="gallery">
        <div className="px-4 sm:px-6 md:px-10 max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">Captured Moments</h2>
              <p className="text-gray-600 dark:text-gray-400">Glimpses of the wild, caught in the perfect light.</p>
            </div>
            <button 
              onClick={handleViewGallery}
              className="flex items-center gap-1 text-sm font-bold text-green-500 dark:text-green-400 border-b-2 border-green-500 pb-1 hover:bg-green-500/10 hover:px-2 hover:rounded-md transition-all duration-300 group cursor-pointer"
            >
              View More Gallery 
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[minmax(150px,200px)]">
            {/* Large item */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer hover:border-4 hover:border-green-500/30 transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5A3NAiRKCGoSFv-9Ltthp4Fpj9YkshrWi9lqBNQ0XK8AmAbuheKZhG8ujbw6-dCQYpTqFRLTL8rujV6NFMnrdYJne2_xC8XfgMU46kEIiRGKn73jRfQA7-1d11ar5Ec567ppMG36SnoNBFCss73dBgZV74cIOdBgyswRnS-oOwZb8n_DbogW-qTZxJph7L6-N-z5S07Ee10PGcI45p2hwBihvw5Sapx0kpp9tb1XQ3RnQYSEvwqfWvgnW6JsRjgawma7Qo8et_Tc")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 sm:p-6 backdrop">
                <span className="text-white font-bold text-base sm:text-lg drop-shadow-lg">Elephant Crossing</span>
              </div>
            </div>
            {/* Tall item */}
            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer hidden sm:block lg:col-span-1 hover:border-4 hover:border-green-500/30 transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVM-klAD1y6foA1_HXNWh6RsjXJ6a0SuoXyOkiYcvyNXGPjwNwqaSXwcwCZKFwYGlAJGzMZcPg6yCzTo-9eButZYq_52qImRAQgQgkpAFMVWr484KAUf9Bod6gpaJ_jH4-ZW9uIHiAyhrak2dvVsEZAjy_nysfIWSsOsXRPsZGMiILmWsPGbZWeHIceXgf7ik-KfkObNjof4lx_E2e1WfD2Z02V5-LX0ahzatrfWG_nuO5Jd3vDdxghVAqO4d9vOGzTACj65lk0XE")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 sm:p-6 ">
                <span className="text-white font-bold text-base sm:text-lg drop-shadow-lg">Leopard's Gaze</span>
              </div>
            </div>
            {/* Small items */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer hover:border-2 hover:border-green-500/50 transition-all duration-300">
              <div  
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDd3miW1uU2gGcA4XwQYF6VnD1aJ39hymJ-5gTnm6SVXeDnbV-1cRBKcKlmmtKMeAzT9ekVVKsJC-CSzKF5hFgOt59MNoZ_YAQCsYHfjgWW3PwYsVyx3ot4t1iuCFx8jkbDpTtP7-GHJ7RNpjETHXjx6sO9Ueh3TQxyueW3NuX_BB7pR2G5ZxlCSN_kEuuzDJNbEp9PhfIsRpTb9r2QIAnAtVC0H5riv750LWpMJAQpSXcJHNzkc1fRW30IlcEbvkO45Bl7NhWq8jI")`
                }}
              />
            </div>
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer hover:border-2 hover:border-green-500/50 transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJcVMtvHvhHjsDjhZPpHMoCqtdUIbJ9gokoqYnaw-UWhhSPBPYOVnGZByWiTCcNDhDCUzEhGLqO1DsGonOLbiagRJ9gebKBJaj2JN3hMz0JrW3AJ0Wz7dqAlwdPol-FDnYlfxpuEoFBYn1Hwc9P8e8LlsgfckpWX0iHCOSydJhplXIRFlnCqGaHmr50-FgacHayBK0qvV4YxG7LjwN_3uc85oyBAo2zwo8ZSYTjW5f_pXsukS4VVF9UdTQBFnqL8RdC1rbANRQ9XA")`
                }}
              />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer hover:border-2 hover:border-green-500/50 transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvES7Cs-FfNhyM8Vws8aTM5YAMQJ4-vR6yRkbCZQbizDgjcDISuSQVusPMM1xd2PngP3dAFdHMjz6xatygDOVul67thypEb1bi5a04vyf_52cnbUAg1mkfHeWZg-UM_I6xBzZNl2IjTO6QM7iogOFlmmG4Og8DSPopcimJ4lYUY18T6chXpDOHo9wtd0HOTAoy5jPeW4EkZDKLFDGvR9Rjw__eN7WQP0KTuDmHFJIiJRQsLbAoOtf3PAo6iM3tFEIJ7wiWISKzcU0")`
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto bg-gray-50/50 dark:bg-gray-900/50" id="blog">
        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-green-500 font-bold tracking-wider uppercase text-sm">Wild Journal</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">Tales from the Jungle</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Blog Card 1 */}
            <article className="flex flex-col group cursor-pointer hover:shadow-green-500/20 transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 sm:mb-6 group-hover:shadow-2xl">
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide z-10">
                  Sighting Report
                </div>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAqms6-tbN5JeQ2ireUmRaD11Xi216fTYcyKiVOADdGOI9yl07mghzZLmDsTP684S1N8tsD1BewKpPZQX-sIV00_wUbg9DMS0zR2BEDlyxOUg9_CmdQ3HmaJvJ6bOUDCgUes5LuBgrunyaL6vvOaePZQTc53y09BsXvMPGiozEIxNdvTSSLQgQAk4tipT8g7v_JZCJv9SJtOQMKBmXz27rvw5-hqExSeqgIF6_ZQTPst2aDeewLHy7KH7KsZ5HXxSliTxw6dVkLRA")`
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 font-medium">
                  <Calendar className="w-4 h-4" />
                  Oct 12, 2023
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-500 transition-all duration-300 leading-tight">
                  Rare Black Panther Spotted in Zone 4
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  A once in a lifetime sighting happened yesterday evening during the routine patrol...
                </p>
                <a className="inline-flex items-center gap-1 text-sm font-bold mt-2 hover:text-green-500 hover:underline decoration-green-500 underline-offset-4 transition-colors" href="#">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
            {/* Add other blog cards similarly */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JungleSafariHome;
