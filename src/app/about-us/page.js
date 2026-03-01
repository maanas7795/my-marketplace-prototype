import Image from "next/image"
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">

  {/* Logo */}
  <Image
    src="/logo.png"
    alt="Alpha Logo"
    width={150}
    height={150}
    className="mb-6 border-0 outline-none"
  />
   {/* Blob 1 */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-300 opacity-50 blur-1xl animate-pulse"></div>
      
      {/* Blob 2 */}
      <div className="absolute bottom-[-40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-300 opacity-50 blur-1xl animate-pulse"></div>
      
      {/* Blob 3 */}
      <div className="absolute bottom-[-30%] left-[-5%] w-[300px] h-[300px] rounded-full bg-green-300 opacity-20 blur-1xl animate-pulse"></div>
     
     {/* Blob 4 */}
      <div className="absolute top -[-100%] right-[-5%] w-[200px] h-[200px] rounded-full bg-yellow-300 opacity-30 blur-1xl animate-pulse"></div>

 {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center">
          About Us – <span className="text-blue-600">ALPHA</span>
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-6 text-center">
          Welcome to <strong>ALPHA</strong> – India’s first{" "}
          <span className="text-blue-600 font-semibold">time-based marketplace</span> for products and services.
        </p>

        {/* Section: What is Time-Based Listing */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3-">
            What is a “Time-Based Marketplace”?
          </h2>
          <p className="text-gray-700 leading-relaxed-">
            Unlike traditional platforms that take heavy commissions or flat monthly fees, 
            ALPHA lets sellers pay only for the <strong>time</strong> their product or service is listed. 
            For example, if a seller lists an item for 3 days, they only pay for those 3 days – nothing more. 
            This creates a system that is <span className="font-medium">fair, transparent, and seller-friendly</span>.
          </p>
        </div>

        {/* Section: Why Sellers Join */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why Sellers Join ALPHA
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>No high commissions</strong> – keep your profits, just pay for the listing duration and gateway fees of 2 or 3 %.</li>
            <li><strong>Full flexibility</strong> – choose how long your product/service stays live.</li>
            <li><strong>Equal opportunity</strong> – small businesses and startups can compete fairly with big players.</li>
            <li><strong>Built-in trust</strong> – with verified sellers, OTP-based orders, and escrow payments, buyers feel safe shopping with you.</li>
          <li><strong>Physical Convenience</strong> – No need of physical stores or physical listings and no physical maintainenance.</li>
           <li><strong>Sales</strong> – The seller can sell unlimited of their product once listed,no interruption on your sales.</li>
          </ul>

        </div>

        {/* Section: Why Buyers Love */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3-">
            Why Buyers Love ALPHA
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Fresh listings only</strong> – no old or expired products cluttering the platform.</li>
            <li><strong>Transparent sellers</strong> – verified, secure, and scam-aware marketplace.</li>
            <li><strong>Wide variety</strong> – everything from tech to services, in one place.</li>
          </ul>
        </div>

        {/* Closing */}
        <p className="text-lg text-gray-700 text- mt-8">
          At <span className="font-bold text-blue-600">ALPHA</span>, we’re building a marketplace that is{" "}
          <span className="font-semibold">fair for sellers, safe for buyers, and fresh for everyone</span>.
          </p>
           <p className="font-bold text-red-500">Note: Propritary Concept-All Rights Reserved
        </p>
       </div>
  );
}


    