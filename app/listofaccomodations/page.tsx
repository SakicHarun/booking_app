import React from 'react';
import Navbar from '@/app/components/Navbar'; // Putanja do tvoje Navbar komponente

import Footer from '@/app/components/Footer'; // Putanja do tvoje Footer komponente
import ListOfAccommodations from '../components/ListOfAccomodations';

const page: React.FC = () => (
  <div className='flex flex-col min-h-screen'>
    <Navbar />
    <main className='flex-grow'>
      <ListOfAccommodations />
    </main>
    <Footer /> {/* Ukloni className ako nije podržan */}
  </div>
);

export default page;
