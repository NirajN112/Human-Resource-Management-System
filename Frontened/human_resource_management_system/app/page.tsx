import Image from "next/image";
import React from 'react';
import { Award, LogIn } from 'lucide-react';
import { Metadata } from "next";
const IMAGE_URL = "images.jpg";
const BACKGROUND_IMAGE_URL = "Information+Systems+in+Human+Resource+Management-640w.webp";
export const metadata: Metadata = {
  title: "Human Resource Management System",
  description: "Odoo Hackathon",
};
export default function Home() {
  return (
    <div 
      className="min-h-screen font-sans text-gray-800 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url('${BACKGROUND_IMAGE_URL}')` }}
    >

      {/* Header Section - Kept existing semi-transparent background for readability */}
      <header id="header" className=" pt-8 pb-16 md:pb-90 shadow-inner">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          

          {/* Main Title and Motto */}
          <div className="text-center pt-8">
            <p className="text-xl md:text-2xl text-white mb-2 font-medium">
              Your People Our Platform
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
Human Resource Management System
            </h1>
          </div>
        </div>
      </header>

      {/* About Section - Uses solid white background (bg-white) for text readability */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Column */}
            <div className="lg:order-1 order-2">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-b-4 border-green-500 pb-2 inline-block">
                 Human Resource Management System
                </h2>
                
                <div className="space-y-5">
                    <p className="text-xl leading-relaxed text-gray-700 font-semibold">
                    Organizations need a system that helps track employee data, from their demographic and contact information to their payroll data, years of service, and organizational structure. Information systems in human resource management that track HR data are referred to as an HRIS, or Human Resources Information System. They are also sometimes referred to as Human Resources Management Systems, or an HRMS, Human Capital Management Systems, or an HCM, and HRIS systems.


                    </p>
                
                  
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:order-2 order-1">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border-8 border-white group">
                <img
                  src={IMAGE_URL}
                  alt="A clean urban environment representing a green future"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  // onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/4CAF50/ffffff?text=Image+Not+Found"; }}
                />
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-xl shadow-3xl w-[80%] max-w-sm border-t-4 border-green-500 opacity-95 transition duration-300 group-hover:opacity-100 group-hover:-translate-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-yellow-100 rounded-full text-yellow-600 shadow-md">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900">Human Resource Management System</h5>
                      <span className="text-sm text-gray-500">With Digital Innovation 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Spacer for bottom margin */}
      <div className="h-12"></div>
    </div>
  );
}