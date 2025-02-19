import Image from 'next/image';
import CourtImage from '@/public/courtImage.jpeg';
import LawyerTwo from '@/public/lawyerTwo.jpeg';
import LawyerFour from '@/public/lawyerFour.jpg';
import Link from 'next/link';
import { BookOpen, Building2, Scale, Gavel, HardHat, HeartHandshake } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" className="w-44">
            <text x="50%" y="60%" fontFamily="Arial, sans-serif" fontSize="60" fill="#004477" fontWeight="bold" textAnchor="middle" letterSpacing="5">
              LAWINE
            </text>
            <path d="M20 40 Q40 10, 80 30 T140 20 T200 50 T260 40 T320 25 T380 35" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" />
          </svg>
          <div className="gap-6 hidden sm:flex">
            <Link href="/logIn">

             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [& svg]:pointer-events-none [&_ svg]:size-4 [& svg]:shrink-0 text-primary-foreground shadow h-9 px-4 py-2 bg-blue-700 hover:bg-blue-800"> Log in </button>
            </Link>
            <Link href="/regester">
           <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [& svg]:pointer-events-none [&_ svg]:size-4 [& svg]:shrink-0 border shadow-sm h-9 px-4 py-2 bg-white text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition-all duration-300 ease-in-out"> Sign up </button>
            </Link>
          </div>
          <div className="block sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className="cursor-pointer">
              <rect width="30" height="4" x="5" y="10" rx="2" fill="#000" />
              <rect width="30" height="4" x="5" y="18" rx="2" fill="#000" />
              <rect width="30" height="4" x="5" y="26" rx="2" fill="#000" />
            </svg>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[91vh]">
        <Image src={CourtImage} alt="Kansas State Capitol" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience the Kansas Expertise</h1>
            <p className="text-xl mb-8">Lawine&rsquo;s office: A team of local lawyers with a national vision</p>
            <Link href="/logIn">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [& svg]:pointer-events-none [&_ svg]:size-4 [& svg]:shrink-0 text-primary-foreground shadow h-9 px-4 py-2 bg-blue-700 hover:bg-blue-800"> Get Started </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Welcome to Lawine&rsquo;s office</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src={LawyerTwo} alt="About Us" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-gray-600 mb-4">
                Frieden & Forbes, LLP is a high-profile civil law firm with an outstanding reputation for complex business, construction, and litigation matters. We also possess a unique expertise with the gaming industry and represent several casinos in the Las Vegas area.
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition duration-300">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Tax Law", icon: <BookOpen className="w-6 h-6 text-blue-700" />, text: "Tax law refers to the legal framework governing the assessment, collection, and enforcement of taxes by government authorities. It encompasses regulations related to income tax, corporate tax, property tax, sales tax, and other forms of taxation." },
              { title: "Wills and Trusts", icon: <Scale className="w-6 h-6 text-blue-700" />, text: "Wills and trusts are legal instruments used for estate planning to manage the distribution of assets after death. A will is a document that outlines how a person's property and affairs should be handled." },
              { title: "Business Law", icon: <Building2 className="w-6 h-6 text-blue-700" />, text: "Business law encompasses the rules, regulations, and legal practices that govern commercial relationships and transactions. It includes areas such as contract law, corporate governance, employment law, and intellectual property." },
              { title: "Civil Law", icon: <Gavel className="w-6 h-6 text-blue-700" />, text: "Civil law is a legal system that governs disputes between individuals, organizations, or between the two in matters involving rights, obligations, and responsibilities." },
              { title: "Construction", icon: <HardHat className="w-6 h-6 text-blue-700" />, text: "Construction is the process of building, assembling, or modifying structures such as houses, commercial buildings, roads, and bridges." },
              { title: "Marriage and Divorce", icon: <HeartHandshake className="w-6 h-6 text-blue-700" />, text: "Marriage is a legally and socially recognized union between two people, while divorce is the formal dissolution of a marriage." },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center mb-2">
                  {service.icon}
                  <h3 className="ml-2 text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src={LawyerFour} alt="Professional Team" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Meet Our Professional Team</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-2 px-4 rounded transition duration-300">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center mx-auto px-4">
          <h2>©️ Lawine. All rights reserved</h2>
        </div>
      </footer>
    </div>
  );
}
