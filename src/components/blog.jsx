import { useState } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJeAyq4nCmoVBq_4IVz9e1t36O7H3Yo-eV7U7kQuW3hvB_Ae33oDQjdsK44PMz5FQbvywg5cjo25jQDmPouFvYW7gu0S-2LxkH4d5w7rBPd80g1sHK5Bz7KXyvRUx8gecWA9oevB9SmHPi_SPxPDWFxB_w9YZZm6twnfqabQBmsJGndaKfrZEXBJDyQCxH1mH4eNYc10veYMX3L4FpiXdN2eOfmJ8INfeHo4SxJB2Oh746RGqs0p05e3Em2IQH1GKFrHmMyUQ3-Qg",
      category: "Featured Story",
      title: "Spotting the Elusive Leopard: A Guide",
      excerpt: "Patience is key when tracking the most secretive of the big cats. Our expert guides share their top strategies for spotting these majestic creatures in their natural habitat.",
      date: "Nov 12, 2023"
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-8Crr7uq9-eDL3-a3XPlyhW7d3qt8br0_5bZvTeY0tQ1GPKQlfSfS-nKq5ztOM6Ji9eqFwpNyPjt18wv-5pThUN46JlQkp6FVzZt6FJ4C5i-LQdSQJHVqt7D3BrsSmr5ldUuUCkQzJ7viXzLbStMlS6hfjr0yCGLici7RFvq6z9R9QNW0vO5naDXhoUqWxD61EiUZ6uf131ZV0fCzA-vWfVkBRqdfMa-OWvTrpC5QA3k94fBMJJiO1W5gWk6jt_om-21y0I9u3AU",
      category: "Bird Watching",
      title: "The Symphony of the Canopy",
      excerpt: "Discover the vibrant world of tropical birds. From the loud calls of macaws to the subtle songs of finches, our guide helps you identify the sounds of the jungle.",
      date: "Oct 28, 2023"
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpygoOMXuTWhdmuSZYsEyIdQr52rox_NdskY46Uc-4F9jOPLMez04zkqTIbcqvCXIEJgBTFpvHPQqNTtPctSgynRJu-66__xqnS7MZxhHyH-irR-w6Nn7iyQBo1jYWDW3-AzpFVHR3FQJp-jm11O4_KW4eLbuMh_4rNGHiRE18RlVpjeusTIDRZXOhdQWq_aCM96d3cOH6I5jPV4Om0ifIQnsabU26Qc1g_wzys-4kk1ow7PcseBKYYwZgrH2c6ZKMjwVPtIwYppU",
      category: "Travel Tips",
      title: "Packing for the Unknown",
      excerpt: "What exactly do you need for a week in the wild? We break down the essential gear list, from moisture-wicking fabrics to the best binoculars for beginners.",
      date: "Oct 15, 2023"
    },
    {
      id: 4,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6ytXR0G01TumOshXKURGrU83GkxxiRgi2Y9I_Ry-ncuyJfn50DvC-5L0VGc4WNiMi4JWy5n5304jsGzTXXUsYE8Zt2t-9EN5Atx3zSnCIHc4V7y0HYQMAgogfnFmOwhwI8iU37BWE1FrD3qm2K5iGb-EhRmK5sab_qLxp3h4NKsyRz6Ov8Aa0QGRJjUeNJYEMLlF_QIgI-v6-3asUwjl4gp8eaffNtZF9zKfdhmiyIU1YOLS3_K0PCORdi2n1lYgaGVEW9-B4tA0",
      category: "Conservation",
      title: "Preserving the Green Heart",
      excerpt: "Meet the local heroes dedicated to protecting these ancient forests. Learn about our sustainable tourism initiatives and how your visit contributes.",
      date: "Sep 30, 2023"
    },
    {
      id: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRbcKeTtT3C-35JuHN-Nmv-TugYPKyxlt3Zeg8eOoWeQDsHP5TRnK7q_GUE4cdkgO2NQ7sircSju0ic92bBjYqZ43h5Zp46ViUR6G-Hiwsle3QXmljJFsqw-cd3zjCJG0GPxHn3gmjcYE8dvXK6DCss2mCJVCeAxYd0UhFLfLFmLw_H24gGhps6deFDcChNzQfYwwKI_XyQ_bQskhvrY1OdGx10aXEbPLO5HYQosakCQoWWSwMgiq2IKf6sFsbC5paQbr_SuvOIlI",
      category: "Adventure",
      title: "Night Safari Secrets",
      excerpt: "The jungle never sleeps. Experience the thrill of a guided night walk and witness the nocturnal creatures that only emerge under the cover of darkness.",
      date: "Sep 12, 2023"
    },
    {
      id: 6,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDIz1j6jTURx_bxkobL_nP59GyZSkuj7FwKcuS2VMM3G3jE9kulgqa2fw3u2Df8rNJyKPs5ealDmsGlRVUOzMltvBh2vD8xpNATgfCVa83XMhiM6LQ2BCvPky6g4YcGtskxs7qsFVFrodDN-0wwRPMFx5eB-xneolRaFqD4ntWyIzQQX2OCWRyXvFh4BhLj_gV_fjO_Oix6dZRoO4j1MLTvJ0ZTuAAxaDd1US5_vzKD3j9UEyA8OcUQb62D6wZwQ7PsrKUEeQjqgE",
      category: "Photography",
      title: "Wildlife Photography 101",
      excerpt: "Capturing the perfect shot requires more than just a good camera. Our resident photographer shares tips on lighting, composition, and animal behavior.",
      date: "Aug 24, 2023"
    },
    {
      id: 7,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbNTyMSe6pIRUDOUB0gv7Gy4qERLUM5z28AK-NNodITpgTBiMZBLbS0rHZvMMOemzZJlOg95FFcM_S9CPzQHStQDU1J4_yLImrRW7AwidJdQBNyv_hvbIzqpLjh8724mUYEBRqie-HHSMm3dA-XmTdhpGbpIH24QdbWQTDkcwTUY3zDCX5_fY2TqAd2PUCiEaLHD3c73-OrMYKg3JaRaq8n9OcNI14HBpNzDmimtqoMCTz_9wh3WR_toH0uPn5SOP5ZJAox-nuIgc",
      category: "Guides",
      title: "Navigating the Dense Green",
      excerpt: "Getting lost is not an option. Understand the basics of jungle navigation, reading trails, and using landmarks to stay oriented in the thick canopy.",
      date: "Aug 10, 2023"
    }
  ];

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  const nextPost = () => {
    if (!selectedPost) return;
    const currentIndex = blogPosts.findIndex(post => post.id === selectedPost.id);
    const nextIndex = (currentIndex + 1) % blogPosts.length;
    setSelectedPost(blogPosts[nextIndex]);
  };

  const prevPost = () => {
    if (!selectedPost) return;
    const currentIndex = blogPosts.findIndex(post => post.id === selectedPost.id);
    const prevIndex = currentIndex === 0 ? blogPosts.length - 1 : currentIndex - 1;
    setSelectedPost(blogPosts[prevIndex]);
  };

  return (
    <>
      <main className="flex-1 flex flex-col items-center w-full bg-gray-800 text-white pt-20">
      <div className="w-full max-w-[1280px] px-4 md:px-8 py-8 md:py-12 flex flex-col gap-10">
          {/* Page Heading & Featured Post - Improved Animation */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Wilderness Journal
              </h1>
              <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed">
                Insights from the Heart of the Jungle. Explore our stories, guides, and photography.
              </p>
            </div>

            {/* Featured Post Card - Better proportions & smooth animation */}
            <div className="w-full">
              <div 
                className="group flex flex-col lg:flex-row items-stretch overflow-hidden rounded-xl shadow-sm bg-gray-900 border border-gray-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedPost(blogPosts[0])}
              >
                <div 
                  className="w-full lg:w-1/2 h-64 lg:h-80 bg-center bg-no-repeat bg-cover relative overflow-hidden" 
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJeAyq4nCmoVBq_4IVz9e1t36O7H3Yo-eV7U7kQuW3hvB_Ae33oDQjdsK44PMz5FQbvywg5cjo25jQDmPouFvYW7gu0S-2LxkH4d5w7rBPd80g1sHK5Bz7KXyvRUx8gecWA9oevB9SmHPi_SPxPDWFxB_w9YZZm6twnfqabQBmsJGndaKfrZEXBJDyQCxH1mH4eNYc10veYMX3L4FpiXdN2eOfmJ8INfeHo4SxJB2Oh746RGqs0p05e3Em2IQH1GKFrHmMyUQ3-Qg")`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent group-hover:from-black/30 group-hover:via-black/10 transition-all duration-500"></div>
                </div>
                <div className="flex w-full lg:w-1/2 flex-col justify-center gap-4 p-6 lg:p-10">
                  <div className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                      Featured Story
                    </span>
                    <span className="text-gray-500 text-xs font-medium">• Nov 12, 2023</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black leading-tight group-hover:text-primary transition-all duration-300 ease-out">
                    Spotting the Elusive Leopard: A Guide
                  </h3>
                  <p className="text-gray-300 text-base lg:text-lg font-normal leading-relaxed">
                    Patience is key when tracking the most secretive of the big cats. Our expert guides share their top strategies for spotting these majestic creatures in their natural habitat.
                  </p>
                  <div className="pt-4 group/read">
                    <div className="inline-flex items-center gap-2 text-primary font-bold text-lg tracking-wide hover:gap-4 transition-all duration-300 group-hover/read:translate-x-2">
                      Read Full Story 
                      <ArrowRight className="w-6 h-6 group-hover/read:translate-x-1 transition-transform duration-300 ease-out" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid - No filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, visiblePosts).map(post => (
              <article 
                key={post.id} 
                className="flex flex-col group bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-700 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <div className="flex justify-between items-center text-xs font-medium text-gray-500">
                    <span className="text-primary font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-all duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4">
                    <div className="text-sm font-bold text-primary border-b-2 border-transparent hover:border-primary hover:w-full transition-all duration-300 w-24">
                      Read Story →
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < blogPosts.length && (
            <div className="flex justify-center py-6">
              <button 
                onClick={loadMorePosts}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-white font-bold hover:from-gray-700 hover:to-gray-800 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                Load More Stories ({blogPosts.length - visiblePosts} remaining)
              </button>
            </div>
          )}

      </div>
    </main>

      {/* Full Story Modal - Smaller Image */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-400"
          onClick={closeModal}
        >
          <div 
            className="w-full max-w-3xl max-h-[90vh] bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-600 ease-out max-md:rounded-b-none max-md:h-screen"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-800 sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10">
              <div className="flex items-center gap-4">
                <button
                  onClick={prevPost}
                  className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/80 transition-all duration-200 hover:scale-105"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                    {selectedPost.category}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">{selectedPost.date}</span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/80 transition-all duration-200 hover:scale-105"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Smaller Featured Image */}
            <div className="h-48 md:h-64 w-full overflow-hidden bg-gray-800 relative">
              <img 
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Content - More space */}
            <div className="p-8 md:p-12 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8 text-white drop-shadow-sm">
                {selectedPost.title}
              </h1>
              <div className="prose prose-invert max-w-none">
                <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-8 font-light">
                  {selectedPost.excerpt}
                </p>
                <div className="text-gray-200 leading-relaxed space-y-6 text-lg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between p-6 md:p-8 border-t border-gray-800 bg-gray-900/95">
              <button
                onClick={prevPost}
                className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-all duration-200 hover:gap-3"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous Story
              </button>
              <button
                onClick={closeModal}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-gray-900 font-bold hover:from-primary hover:to-primary/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30"
              >
                Close Story
              </button>
              <button
                onClick={nextPost}
                className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-all duration-200 hover:gap-3"
              >
                Next Story
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
