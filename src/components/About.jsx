import { 
  ArrowRight, 
  Bird, 
  Map, 
  Users, 
  Flag, 
  MapPin, 
  Award, 
  Star,
  Car,
  Ship,
  Moon,
  PawPrint
} from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white font-display overflow-x-hidden antialiased">
      {/* Hero Section (Reduced Height) */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center p-4">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-b-[3rem] z-0 mx-4 mt-4" 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7IKp4CZKkShXsPfV6YLdHczerTHYo6j3hnoNPwtUe0il7JFS0C4AmGGeNVN7Ni4xaxXqeTZGXdDJqA68J7XAaTpyVnxLl61Uo7ldCoQwfWMk4SwLsK-MlXrpfoUAw8rxDqsklxAPSK3GWBp-cdDpI1JwAT_L_x3Mp2X5o1kwdFM3ImurJNQ5cCC4Rp5AFOHf6O2JC3rcxva23VfQ2gIiZ72G5r8jjNti7W9FJVrbOdsPe2HXWaFGBMJncdd050ZxlgOuoJjRprw8")`
          }}
        />
        <div className="relative z-10 flex flex-col gap-4 text-center max-w-[800px]">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Since 1995</span>
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
            Our Wild Legacy
          </h1>
          <p className="text-gray-200 text-lg font-normal leading-relaxed max-w-xl mx-auto">
            Exploring the heart of nature, preserving wildlife, and creating unforgettable adventures for nearly three decades.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center w-full px-4 md:px-10 py-12 gap-16 md:gap-24">
        {/* Intro Section: Narrative Text Block */}
        <div className="max-w-[1100px] w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">Preserving Nature & Wildlife</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-300 text-base leading-loose font-normal">
              From dense forests to a world-class sanctuary, our mission has always been conservation first. We provide a safe haven for endangered species while educating the public about the delicate balance of our ecosystem.
            </p>
            <p className="text-gray-300 text-base leading-loose font-normal">
              Our team of dedicated rangers and biologists work around the clock to ensure the safety of our inhabitants, conducting research that contributes to global conservation efforts.
            </p>
            <div className="pt-2">
              <button className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors group">
                <span>Read Our Full Mission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-2xl shadow-xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500" 
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-xzA7zzW3f3GzLJRNgATlCfoTtQ5RAgH5MDtI5151kLnoc5IxqxgwOOwSeQycC4qjjFLQkELwZO5ASSNeq_zj9lMzTk1wtqm8GVvd3Mtofc12EP0T2k06zsEFVYlQNOlDyXMPr9_gIsDpzSZ5HOlv61nkpljHgusnOmA1jrNbXJtA4qQl2nos0SM2DWUtfC1OCzUXkElG4HBBh2m1PPAl3sMWRocBDSdv4YxpKBYTTIAMw9JcJdI7_RZPmpo2cOKwBEN12K4fjaM")`
              }}
            />
            <div className="absolute -bottom-6 -left-6 bg-gray-900 p-4 rounded-xl shadow-lg max-w-[200px] hidden md:block">
              <p className="text-sm font-bold text-white">"Nature does not hurry, yet everything is accomplished."</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="w-full bg-gray-900 rounded-[3rem] p-10 md:p-16 shadow-sm">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {/* Stat 1 */}
              <div className="flex flex-col items-center gap-4 text-center group">
                <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-gray-900 transition-colors duration-300">
                  <PawPrint className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white">50+</h3>
                  <p className="text-gray-400 font-medium">Royal Bengal Tigers</p>
                </div>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col items-center gap-4 text-center group">
                <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-gray-900 transition-colors duration-300">
                  <Bird className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white">300+</h3>
                  <p className="text-gray-400 font-medium">Bird Species</p>
                </div>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col items-center gap-4 text-center group">
                <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-gray-900 transition-colors duration-300">
                  <Map className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white">120</h3>
                  <p className="text-gray-400 font-medium">Sq Km Protected</p>
                </div>
              </div>
              {/* Stat 4 */}
              <div className="flex flex-col items-center gap-4 text-center group">
                <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-gray-900 transition-colors duration-300">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white">1M+</h3>
                  <p className="text-gray-400 font-medium">Happy Visitors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
<div className="max-w-[900px] w-full flex flex-col gap-12">
  {/* Header */}
  <div className="text-center flex flex-col items-center gap-3">
    <div className="h-1 w-20 bg-gradient-to-r from-primary/60 to-primary rounded-full opacity-0 translate-y-4 animate-slide-in-up"></div>
    <h2 className="text-white text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
      Our Journey
    </h2>
    <p className="text-gray-400 max-w-md leading-relaxed">
      From a small plot of land to a globally recognized sanctuary.
    </p>
  </div>

  {/* Timeline Container */}
  <div className="relative px-6 md:px-12">
    {/* Central Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-primary/30 via-gray-600 to-primary/20 rounded-full opacity-0 animate-fade-in-slow"></div>

    {/* Timeline Items */}
    <div className="space-y-8 md:space-y-12">
      {/* 1995 */}
      <div className="flex items-start gap-6 md:gap-8 group/timeline">
        <div className="flex flex-col items-center gap-2 pt-3 md:pt-6 z-20 relative">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm flex items-center justify-center rounded-2xl size-12 md:size-14 border-4 border-gray-800 shadow-lg group-hover/timeline:scale-110 transition-all duration-500 hover:shadow-primary/20">
              <Flag className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover/timeline:rotate-12 transition-all duration-500" />
            </div>
            <div className="absolute -top-1 -left-1/2 w-[3px] h-full bg-gradient-to-b from-primary/40 to-transparent transform translate-x-1/2 opacity-0 group-hover/timeline:opacity-100 transition-all duration-500 animate-pulse"></div>
          </div>
        </div>
        <div className="flex-1 max-w-md opacity-0 group-hover/timeline:opacity-100 group-hover/timeline:translate-x-4 transition-all duration-700">
          <div className="bg-gray-900/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-gray-800/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover/timeline:shadow-primary/15">
            <span className="text-primary font-bold text-sm md:text-base px-3 py-1 bg-primary/10 rounded-full inline-block tracking-wider">
              1995
            </span>
            <h4 className="text-white text-xl md:text-2xl font-bold mt-3 mb-3 leading-tight">
              The Beginning
            </h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide">
              Founded with just 20 acres of land dedicated to rehabilitating injured animals found in the local logging regions.
            </p>
          </div>
        </div>
      </div>

      {/* 2005 */}
      <div className="flex items-end md:items-start gap-6 md:gap-8 group/timeline flex-row-reverse md:flex-row">
        <div className="flex flex-col items-center gap-2 z-20 relative">
          <div className="w-[3px] bg-gradient-to-t from-primary/40 to-transparent h-6 md:h-8 opacity-0 group-hover/timeline:opacity-100 transition-all duration-500"></div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm flex items-center justify-center rounded-2xl size-12 md:size-14 border-4 border-gray-800 shadow-lg group-hover/timeline:scale-110 transition-all duration-500 hover:shadow-primary/20">
              <MapPin className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover/timeline:-rotate-12 transition-all duration-500" />
            </div>
            <div className="absolute -bottom-1 -right-1/2 w-[3px] h-full bg-gradient-to-t from-primary/40 to-transparent transform translate-x-1/2 opacity-0 group-hover/timeline:opacity-100 transition-all duration-500 animate-pulse"></div>
          </div>
        </div>
        <div className="flex-1 max-w-md opacity-0 group-hover/timeline:opacity-100 group-hover/timeline:-translate-x-4 transition-all duration-700">
          <div className="bg-gray-900/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-gray-800/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover/timeline:shadow-primary/15">
            <span className="text-primary font-bold text-sm md:text-base px-3 py-1 bg-primary/10 rounded-full inline-block tracking-wider">
              2005
            </span>
            <h4 className="text-white text-xl md:text-2xl font-bold mt-3 mb-3 leading-tight">
              Major Expansion
            </h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide">
              Acquired an additional 50 sq km of forest land, allowing for the reintroduction of larger predators like leopards and bears.
            </p>
          </div>
        </div>
      </div>

      {/* 2015 */}
      <div className="flex items-start gap-6 md:gap-8 group/timeline">
        <div className="flex flex-col items-center gap-2 pt-3 md:pt-6 z-20 relative">
          <div className="w-[3px] bg-gradient-to-t from-primary/40 to-transparent h-6 md:h-8 opacity-0 group-hover/timeline:opacity-100 transition-all duration-500"></div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm flex items-center justify-center rounded-2xl size-12 md:size-14 border-4 border-gray-800 shadow-lg group-hover/timeline:scale-110 transition-all duration-500 hover:shadow-primary/20">
              <Award className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover/timeline:rotate-6 transition-all duration-500" />
            </div>
            <div className="absolute -top-1 -left-1/2 w-[3px] h-full bg-gradient-to-b from-primary/40 to-transparent transform translate-x-1/2 opacity-0 group-hover/timeline:opacity-100 transition-all duration-500 animate-pulse"></div>
          </div>
        </div>
        <div className="flex-1 max-w-md opacity-0 group-hover/timeline:opacity-100 group-hover/timeline:translate-x-4 transition-all duration-700">
          <div className="bg-gray-900/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-gray-800/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover/timeline:shadow-primary/15">
            <span className="text-primary font-bold text-sm md:text-base px-3 py-1 bg-primary/10 rounded-full inline-block tracking-wider">
              2015
            </span>
            <h4 className="text-white text-xl md:text-2xl font-bold mt-3 mb-3 leading-tight">
              Global Conservation Award
            </h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide">
              Recognized internationally for our breeding program that helped increase the local tiger population by 40%.
            </p>
          </div>
        </div>
      </div>

      {/* 2023 - Special Active State */}
      <div className="flex items-end md:items-start gap-6 md:gap-8 group/timeline flex-row-reverse md:flex-row">
        <div className="flex flex-col items-center gap-2 z-20 relative">
          <div className="w-[3px] bg-gradient-to-t from-primary/60 to-primary/40 h-6 md:h-8"></div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary/80 backdrop-blur-sm flex items-center justify-center rounded-2xl size-12 md:size-14 border-4 border-primary shadow-xl shadow-primary/30 group-hover/timeline:scale-110 transition-all duration-500">
              <Star className="w-6 h-6 md:w-7 md:h-7 text-gray-900 group-hover/timeline:rotate-360 transition-all duration-1000" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent animate-shimmer opacity-70 blur-sm pointer-events-none"></div>
          </div>
        </div>
        <div className="flex-1 max-w-md">
          <div className="bg-gradient-to-r from-gray-900/95 to-gray-800/90 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-2xl border border-primary shadow-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-gradient-shift"></div>
            <span className="text-primary font-bold text-sm md:text-base px-4 py-1.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full inline-block tracking-wider shadow-md shadow-primary/20 relative z-10">
              2023
            </span>
            <h4 className="text-white text-xl md:text-2xl font-bold mt-3 mb-3 leading-tight relative z-10">
              New Tiger Reserve
            </h4>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed tracking-wide relative z-10">
              Opened a specialized zone for tiger tracking safaris, implementing sustainable tourism practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes slide-in-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fade-in-slow {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes gradient-shift {
      0%, 100% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
    }
    .animate-slide-in-up {
      animation: slide-in-up 0.8s ease-out forwards;
    }
    .animate-fade-in-slow {
      animation: fade-in-slow 1.5s ease-out forwards;
    }
    .animate-shimmer {
      animation: shimmer 2s infinite linear;
    }
    .animate-gradient-shift {
      animation: gradient-shift 3s ease-in-out infinite;
    }
  `}</style>
</div>


        {/* Experience Grid */}
        <div className="max-w-[1100px] w-full flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-3xl font-bold">Experience the Jungle</h2>
              <p className="text-gray-400">More than just a drive, it's an immersion.</p>
            </div>
            <a className="text-primary font-bold hover:underline decoration-2 underline-offset-4" href="#">View All Activities</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Jeep Safari */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7BD9bia0qma5NTIZXIWRbXElLboTqP8anuAwRjtpLFvRS9ATAuqBWyJd99s44LeK7zPg48GqHd22jwLjym3b3H07HQRywaHdHcfQf5YklU8MITVXrb0yHT7OoMrA_eBC8Kgxy4DZJO2ve124SJJMYItkZDnnAY2iDVsGl3cU1SOEFGQsRShWQRzfOvKfz0Exd-YlbRqfAdyrzd9DkjXufZNi6h7ddjFELqwCb9i8anlHGfTnUnJTmYd-ItFrq4rXPYtmtf0qzxac")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative h-[360px] flex flex-col justify-end p-6 text-white">
                <div className="bg-primary size-10 rounded-full flex items-center justify-center text-gray-900 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Jeep Safari</h3>
                <p className="text-gray-300 text-sm opacity-80 mb-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mb-4 transition-all duration-500">
                  Navigate the rugged terrain with expert guides to spot the big cats.
                </p>
              </div>
            </div>
            
            {/* Card 2 - River Cruise */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGu4nNgTF91iFBGfup_-K_UVofbNvT26cdN3tMcM0FXN-K0sYZqYQu9uczo7tj-lq5kh0KTYJK596iCobKZFkCxc75V9_1OfKaC3m5ThH9CXq1L5LMTMBOa0tNdE6ESvt_abD1Tyu3nUg4ThIg_FIyPpcMNRXMng634z0nH1eF3ipA_Di7Jql3iuntLjdh8Z3u_SluI9YE1w3FcfZrRLYDHMH6GhCj60tQ8R3IAsKTtWrpKMisdSSRz9HbN5LUV8pWWjbzsJQfRRA")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative h-[360px] flex flex-col justify-end p-6 text-white">
                <div className="bg-primary size-10 rounded-full flex items-center justify-center text-gray-900 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Ship className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold mb-2">River Cruise</h3>
                <p className="text-gray-300 text-sm opacity-80 mb-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mb-4 transition-all duration-500">
                  Silent electric boats allow you to get close to crocodiles and water birds.
                </p>
              </div>
            </div>
            
            {/* Card 3 - Night Camp */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWoyNghkjY_jFi1EBYn-t4WKH7ea4AUfQ17oKtI8BTzBwnBTiYbB3OfwL31hGK3g_UNYIlSIWtMGkDQZysTnFsXYwiQl1QxSiqPfNYE3N6BwjLz-y4Gc3chejkYaFyFh4M_IjgdQ13PfpBMqQOo6IrqnGoY88WVEntHTjtHqOywI9_oMkAHkrVK1yjGCgiy73XFTUMbNKhfVQYbNP_osQmMkufcpgY_cBdev_ErHCvVnhiHv9E5bjms3divS66WbHvyshQATuCD28")`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative h-[360px] flex flex-col justify-end p-6 text-white">
                <div className="bg-primary size-10 rounded-full flex items-center justify-center text-gray-900 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Moon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Night Camp</h3>
                <p className="text-gray-300 text-sm opacity-80 mb-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:mb-4 transition-all duration-500">
                  Experience the jungle sounds under a blanket of stars in our safe zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
