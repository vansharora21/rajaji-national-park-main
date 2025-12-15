const JungleSafariGallery = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111814] dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-black min-h-screen w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[320px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(16, 34, 23, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxvHKTwhpaBRzT0pHAEL3eOzVsppG4hFqvzjn7RP_GDKtu7I93hju6f-QkKLo7BOQHkHe-IjWjgJKAQTTh9bQxyq89wFQT4_nCXfmG5fuHsGLpm1GYpaQZyedSnU7vvvnlPRCut561797JIu41ZgQzt_ljDTQ035sm4aOnAzm5jI4icqsVsLD7695RQL9LsZr5Lrmh76rqenlHUA3L7PJeBMhXj41VFACOVvOQWbGDJCG4n1Cd-Tj9lJNlY7YxbtzEYglVLUuAFnY")'
        }}>
        <div className="text-center px-4 max-w-4xl relative z-10">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-4">
            Captured in the Wild
          </h1>
          <p className="text-gray-200 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Explore the untouched beauty of the jungle through our lens. From elusive predators to breathtaking landscapes.
          </p>
        </div>
      </section>
      {/* Masonry Gallery Grid */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-8 md:py-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {/* Item 1: Tall / Wildlife */}
          <div className="break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-xl bg-[#28392f]">
            <img 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Majestic Bengal tiger walking through tall grass looking directly at camera"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCweJSfDEuE_hOBfZ_qemp97Dt-ynJ8NDXgvkAKScqaLcXGXJboN4B6jEIfvZhQPOkRceK5_kEamZrsHp2NGyVOGFuJsWxO-q5Fl3ipVs9kcSAqh_IpXKijQsAeNUrq-ZZv-j4A_9WaEWGUM4xuJrp7Wn5b96zokt3pr3BvL5dTtfFa1kOw0KKL8TozJB81XH-WBB1rOHNvP-IU4UUjOVkrzga1YI6nr6jDZgABZX0LkoXhJELqw2hhOf_OgxyZGWOdT30CfQQA9TE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Wildlife</span>
              <h3 className="text-white text-lg font-bold">The Royal Gaze</h3>
            </div>
          </div>

          {/* Item 2: Medium / Nature */}
          <div className="break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-xl bg-[#28392f]">
            <img 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Close up of large green tropical leaves with dew drops"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgssHDRzIHUTuDCS4CybnWA73DIwbrOTc5qPz4l5IdkwGwbxTYZOaywit-IZKoNvts59D5qEqRLX9HvYMkWrrNknqRb83ARQlo5ROcKgjdvtuPzlNGOxchlNDME84JpU91K-YALgHe6FwGWM_km9WJZwlDQUjS6nhkNIRGsMYNtQxv7548Otxaiuc8gzsDOgMdHt0Pwo1m_j6HNQ4Xhc-J4n44FnSYqjJE8uD--suXlKwOuyNMasAT_WAbELJurpLwvnfXfCrcAsg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Nature</span>
              <h3 className="text-white text-lg font-bold">Morning Dew</h3>
            </div>
          </div>

          {/* Item 3: Tall / Visitors */}
          <div className="break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-xl bg-[#28392f]">
            <img 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Two tourists in safari gear looking through binoculars in an open jeep"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBkF8nz97syXDp8riUz2e1QULoeMOa7vbkhVnk3WjLM_gAzvbMyKdcotVzgpQ_HG1_4JUx7vatecqZpJxzlueN1jwNfc-sz6BBXbxVl1FlDxrJRZqhs93NFna17zPNL0YmsdJFG2-sncOSxZH8OC8N84FR1eh6DjqmC6rA2vr8-aDzXvJt02MCUHYTPi-Xzph5Q1qEQwVqS6kczfN1zCtrFD6w5WroUhY0ixcpOrbW2tjCfvNZ-RDHkq9yq3jTuDt7yWEqLFAEbqc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Visitors</span>
              <h3 className="text-white text-lg font-bold">The Adventure Begins</h3>
            </div>
          </div>

          {/* Item 4: Short / Vehicles */}
          <div className="break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-xl bg-[#28392f]">
            <img 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Rugged 4x4 safari vehicle crossing a shallow river stream"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp2UBjm6GW2206A1eEj78kjVADo9t7Qb6X5uVowKW5uDlhl7v2SVt5LINHR2_k7n9HU9_0hKokrsXDTfR_9AXR9pJThSsrw65yBJkTtkOKhzeydTDaDfSk2uVzBGvWpCx-mGikGhgkmDVkkjsttPiKgMVsxD7D-khnW2sL9mPDvnU6o0okg8SGLai9qlrKB0osrSj5MgUoph_KG8WdOa1hQOYI6vncEPvRoxYWM2PjR49K11jfS2jvip5zyRCisB_iAt7mcYmd8fA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Vehicles</span>
              <h3 className="text-white text-lg font-bold">River Crossing</h3>
            </div>
          </div>

          {/* Item 5: Tall / Wildlife */}
          <div className="break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-xl bg-[#28392f]">
            <img 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Red fox standing alert in a grassy field with soft lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADfUyj1OxKZvWM0fd1u3gHdFoV0pjIeXgBsJPFgzNtPqEXIbquLcH3M10AYlNkrrxMko8RJXvKpOfOyPl4JhBzqUFQL4kTxJ1BiMy9bf4Yx1cIgLYjvs1z_6O_E6LlnhGHKW2Rs07_U3T5y9mX69lqS4ktX46GYcEMFxrLI3KPEqJqG-k8B85GLe-Z0ZwsiMo5SSFBMMAX3CqdpUDb1lsd7FbETW1my_RwICJwmfyTWmnYWxJidLIq0oqwFLFqd6PNrzonDJIoYkw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Wildlife</span>
              <h3 className="text-white text-lg font-bold">Hidden Observer</h3>
            </div>
          </div>

          {/* Item 6: Short / Nature */}
          <div className="break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-xl bg-[#28392f]">
            <img 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Dramatic golden sunset over the silhouetted savannah trees"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5LWPM__3QOyRuVxGiX6BUn7o22ht9-yCwqO4-iUkXcjNsqx6YoZPFCs8Axzsd8OqS2Onok8x0Fw3WlDHUVqJQkiKqRGS09cRnKrKo9CrG1KRBsvg6c1vDqG1pV-ewenBJ-aCXugsORfoWaNQdc8b-Z39zWeAnQC0yIiq_0GgVGjG7uc_zCqG05McxUSUukrI_UM4hHbCWmPgyJEIUT__qYxKNMX0eY_Y4k70TYptfW9QK5acDYn20Za0iicHlwLiAYNjCFS0ZlAs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Nature</span>
              <h3 className="text-white text-lg font-bold">Golden Hour</h3>
            </div>
          </div>

          {/* Item 7: Tall / Wildlife */}
          <div className="break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-xl bg-[#28392f]">
            <img 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Close up of an elephant skin texture and eye looking wise"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJW5cy8DDk2OFo7VVVYvHtNppuycxGCArKLnsrv_kTZaLzUXDrmrQGyPip4vMR6KZUUEi_eyNEaQnUYxhHwVScy3xTU8ONDcJNuvP0mszXWUMH9JcwAJ5fZ937KSyAUXSD7tMSALw1m2u0SVCUH3zGqgMxSsdHHwfYUTz6kO4lNEakAU9Q9Gw8NjUQa5YSbcv2cfMMOMicZ-yEbCVVXzdbzwxYPCcY7dTUNt9_g9-w3iinaKexOPqxlPwBNwxLrc3teZ03mJyum9o"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Wildlife</span>
              <h3 className="text-white text-lg font-bold">Gentle Giant</h3>
            </div>
          </div>

          {/* Item 8: Medium / Visitors */}
          <div className="break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-xl bg-[#28392f]">
            <img 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Group of friends sitting around a campfire at night in the jungle camp"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApQVJLYRb_3B-ERuKxubGKfzumy2mqWWj4qITP1zKVfPGVZaTCsWChwXQ6sGk1R9xMw9rgEjG6yWJ8dWLwaZXCFj5Y_krkG2EuzwR9ebi0zTGaczfViD15j62gB-9WitUPF3CJls8LnX3YVplUl035xW5mhzJkDVQissbM1000V9XY3MwrFZ8k3_HrZ0H7JzIHqLEnrsskt6Etm3Ilb5EllEMn0S_sELs6AGyHsvXoQN-IA59bMw9zxIEFaxqa0Iyq3Kd0wJeFuR0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Visitors</span>
              <h3 className="text-white text-lg font-bold">Campfire Stories</h3>
            </div>
          </div>

          {/* Item 9: Short / Nature */}
          <div className="break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-xl bg-[#28392f]">
            <img 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Bright colorful tropical bird parrot perched on a branch"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB81JXpaYkJdNO9qdH2-gR2RBMnnpwN4lSLOYP__OOAanlGvUq6ljeBRzPLwAhoy9-ERaWWng4mQq9KoPwYpfWWI-DVAL77fK1X7Lc08Q8fkiIqgm9l5xeHaWJZreibRx5oXC-yqaj2UO2EDPlQC4rmgqvbInogDzV7I0DVbBJETK_dEEkrWVdiA76v3gCvdC9bKFvtKneM6uDUKKPJAxTPRXlJ4Rmpb8HnflvKF6p5gEHL1px_5BCHPok1A1zD353xKQZHmokUQJI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Wildlife</span>
              <h3 className="text-white text-lg font-bold">Vibrant Wings</h3>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button className="text-white/60 hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors">
            <span className="material-symbols-outlined">add_circle</span>
            Load More Memories
          </button>
        </div>
      </div>
    </div>
  );
};

export default JungleSafariGallery;
