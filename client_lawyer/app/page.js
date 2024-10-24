import Image from 'next/image'
import  Courtimage  from '@/public/courtImage.jpeg'
import  LawyerTwo  from '@/public/lawyerTwo.jpeg'
import  LawyerFour  from '@/public/lawyerFour.jpg'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Building2, Scale, Gavel, HardHat, HeartHandshake } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
   return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm ">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" className='w-44'>
  {/* <!-- Text stylized as an avalanche --> */}
  <text x="50%" y="60%" fontFamily="Arial, sans-serif" fontSize="60" fill="#004477" fontWeight="bold" textAnchor="middle" letterSpacing="5">
    LAWINE
  </text>

  {/* <!-- Snow-like effect on top of the letters --> */}
  <path d="M20 40 Q40 10, 80 30 T140 20 T200 50 T260 40 T320 25 T380 35" 
        fill="none" stroke="white" strokeWidth="8" strokeLinecap="round"/>

  {/* <!-- Snowfall effect (small circles) --> */}
  {/* <circle cx="60" cy="30" r="4" fill="white"/>
  <circle cx="130" cy="45" r="5" fill="white"/>
  <circle cx="190" cy="20" r="3" fill="white"/>
  <circle cx="250" cy="50" r="6" fill="white"/>
  <circle cx="320" cy="35" r="4" fill="white"/>
  <circle cx="370" cy="40" r="3" fill="white"/> */}
</svg>
          <div className=' gap-6 sc:hidden sm:flex'>
          <Link href="/logIn">
          <Button  className="bg-blue-700 hover:bg-blue-800"> Log In </Button>
          </Link>
          <Link href="/regester">
          <Button
      variant="outline"
      className={` bg-white text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition-all duration-300 ease-in-out`}> Sign up </Button> 
             </Link>
          </div>
          <div className='sc:block sm:hidden'>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className='cursor-pointer'>
  <rect width="30" height="4" x="5" y="10" rx="2" fill="#000"></rect>
  <rect width="30" height="4" x="5" y="18" rx="2" fill="#000"></rect>
  <rect width="30" height="4" x="5" y="26" rx="2" fill="#000"></rect>
</svg>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[91vh]">
        <Image src={Courtimage} alt="Kansas State Capitol" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience the Kansas Expertise</h1>
            <p className="text-xl mb-8">Lawine's office : A team of local lawyers with national vision</p>
            <Link href="logIn">
            <Button className="bg-blue-700 hover:bg-blue-800">Get started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Welcome to Lawine's office</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={LawyerTwo} alt="About Us"  className="rounded-lg xl:w-[700px] xl:h-[300px] lg:w-[500px] lg:h-[200px] md:w-[500px] md:h-[200px] sm:w-[600px] sm:h-[300px] w-[300px] h-[200px] shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-gray-600 mb-4">
                Frieden & Forbes, LLP is a high-profile civil law firm with an outstanding reputation for complex business, construction and litigation matters. We also possess a unique expertise with the gaming industry and represent a number of casinos in the Las Vegas area.
              </p>
              <Button className="bg-blue-700 hover:bg-blue-800">Learn More</Button>
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
              { title: "Tax Law", icon: BookOpen,text: "Tax law refers to the legal framework governing the assessment, collection, and enforcement of taxes by government authorities. It encompasses regulations related to income tax, corporate tax, property tax, sales tax, and other forms of taxation. Tax laws are designed to ensure that individuals and businesses comply with their tax obligations, contributing to government revenue while also providing guidelines for deductions, credits, and exemptions. These laws vary across jurisdictions and are often complex, requiring specialized knowledge for proper compliance and planning." },
              { title: "Wills and Trusts", icon: Scale,text: "Wills and trusts are legal instruments used for estate planning to manage the distribution of assets after death. A will is a document that outlines how a person's property and affairs should be handled, including the appointment of guardians for minors. It becomes effective only after death and typically goes through probate, a legal process for validating the will. A trust, on the other hand, can be set up during a person's lifetime or upon death and allows a third party, known as a trustee, to manage assets on behalf of beneficiaries. Trusts can help avoid probate, offer privacy, and provide more control over how assets are distributed."},
              { title: "Business Law", icon: Building2,text: "Business law encompasses the rules, regulations, and legal practices that govern commercial relationships and transactions. It includes areas such as contract law, corporate governance, employment law, intellectual property, and mergers and acquisitions. Business law ensures that businesses operate within a legal framework that promotes fair competition, protects consumers, and enforces agreements. It plays a critical role in resolving disputes, ensuring compliance with regulations, and facilitating smooth business operations in both domestic and international markets."},
              { title: "Civil Law", icon: Gavel,text: "Civil law is a legal system that governs disputes between individuals, organizations, or between the two in matters involving rights, obligations, and responsibilities. It deals primarily with private issues such as contracts, property, family law, and torts rather than criminal matters. Civil law aims to resolve disputes through compensation or restitution, rather than punishment, with the aim of providing a fair solution for the parties involved. It is based on codified laws and legislation that we have the ability to help you with these issues"},
              { title: "Construction", icon: HardHat, text: "Construction is the process of building, assembling, or modifying structures such as houses, commercial buildings, roads, and bridges. It involves a range of activities, including planning, design, site preparation, and the use of materials such as concrete, steel, and wood. Construction projects require skilled labor, collaboration between engineers, architects, and workers, and adherence to safety standards and regulations. The industry plays a vital role in infrastructure development and economic growth, providing essential living, working and transportation facilities." },
              { title: "Marriage and Divorce", icon: HeartHandshake, text: "Marriage is a legally and socially recognized union between two people, usually characterized by a commitment to shared responsibilities, emotional support and mutual respect. It often involves a public ceremony and may be influenced by cultural, religious or legal factors. Divorce, on the other hand, is the formal dissolution of a marriage, where the couple legally separates, often dividing assets and making child custody arrangements if possible. While marriage is seen as a symbol of partnership and love, divorce provides a legal solution when the relationship doesn't work out We have the ability to help you with these issues"},
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <service.icon className="w-6 h-6 mr-2 text-blue-700" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src={LawyerFour} alt="Professional Team"   className="rounded-lg xl:w-[700px] xl:h-[300px] lg:w-[500px] lg:h-[200px] md:w-[500px] md:h-[200px] sm:w-[600px] sm:h-[300px] w-[300px] h-[200px]  shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Meet Our Professional Team</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button variant="outline" className="bg-white text-blue-700 hover:bg-gray-100">Learn More</Button>
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

  )
}