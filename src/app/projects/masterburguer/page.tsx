"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  X,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Clock,
  MenuIcon,
} from "lucide-react";

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          BurgerMaster
        </motion.h1>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#social">Social Media</NavLink>
          <NavLink href="#order">Order Now</NavLink>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-primary-dark"
        >
          <nav className="flex flex-col items-center py-4">
            <NavLink href="#home" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink href="#about" onClick={() => setIsOpen(false)}>
              About Us
            </NavLink>
            <NavLink href="#menu" onClick={() => setIsOpen(false)}>
              Menu
            </NavLink>
            <NavLink href="#social" onClick={() => setIsOpen(false)}>
              Social Media
            </NavLink>
            <NavLink href="#order" onClick={() => setIsOpen(false)}>
              Order Now
            </NavLink>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <motion.a
    href={href}
    className="hover:text-secondary transition-colors duration-200"
    whileHover={{ scale: 1.1 }}
    onClick={onClick}
  >
    {children}
  </motion.a>
);

// Hero Component
const Hero = () => {
  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-b from-primary to-background"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unmatched Flavor in Every Bite
          </h2>
          <p className="text-xl mb-6">
            Discover the pleasure of a handcrafted burger made with fresh
            ingredients and lots of love.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-secondary-dark transition-colors duration-200"
          >
            Order Now
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <img
            src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_640.jpg"
            alt="Delicious Burger"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

// About Us Component
const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-center max-w-2xl mx-auto"
        >
          At BurgerMaster, we're passionate about crafting the perfect burger.
          Using only the freshest ingredients and unique flavor combinations, we
          strive to deliver an unforgettable dining experience with every bite.
          Our commitment to quality and innovation has made us a favorite among
          burger enthusiasts since 2010.
        </motion.p>
      </div>
    </section>
  );
};

// Menu Component
const menuCategories = [
  {
    name: "Beef Burgers",
    items: [
      {
        name: "Classic Beef",
        description: "Juicy beef patty with cheese, lettuce, and tomato",
        price: "$12.99",
      },
      {
        name: "Bacon Deluxe",
        description: "Beef patty with crispy bacon, cheddar, and BBQ sauce",
        price: "$14.99",
      },
      {
        name: "Mushroom Swiss",
        description: "Beef patty with sautéed mushrooms and Swiss cheese",
        price: "$13.99",
      },
    ],
  },
  {
    name: "Chicken Burgers",
    items: [
      {
        name: "Grilled Chicken",
        description: "Grilled chicken breast with avocado and ranch",
        price: "$11.99",
      },
      {
        name: "Crispy Chicken",
        description: "Crispy fried chicken with pickles and mayo",
        price: "$12.99",
      },
      {
        name: "Buffalo Chicken",
        description: "Spicy buffalo chicken with blue cheese dressing",
        price: "$13.99",
      },
    ],
  },
  {
    name: "Sides",
    items: [
      {
        name: "French Fries",
        description: "Crispy golden fries with our special seasoning",
        price: "$3.99",
      },
      {
        name: "Onion Rings",
        description: "Crunchy battered onion rings",
        price: "$4.99",
      },
      {
        name: "Mozzarella Sticks",
        description: "Breaded mozzarella sticks with marinara sauce",
        price: "$5.99",
      },
    ],
  },
  {
    name: "Drinks",
    items: [
      { name: "Coca-Cola", description: "Classic cola flavor", price: "$2.49" },
      { name: "Sprite", description: "Lemon-lime soda", price: "$2.49" },
      {
        name: "Iced Tea",
        description: "Freshly brewed unsweetened iced tea",
        price: "$2.29",
      },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Our Menu
        </motion.h2>
        <div className="flex justify-center mb-8">
          {menuCategories.map((category, index) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mx-2 px-4 py-2 rounded-full ${
                activeCategory === category.name
                  ? "bg-primary text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuCategories
            .find((category) => category.name === activeCategory)
            ?.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-primary font-bold">{item.price}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

// Social Media Component
const SocialMedia = () => {
  return (
    <section id="social" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Follow Us on Social Media
        </motion.h2>
        <div className="flex justify-center space-x-8">
          <SocialIcon
            href="https://facebook.com"
            icon={<Facebook size={32} />}
            name="Facebook"
          />
          <SocialIcon
            href="https://instagram.com"
            icon={<Instagram size={32} />}
            name="Instagram"
          />
          <SocialIcon
            href="https://twitter.com"
            icon={<Twitter size={32} />}
            name="Twitter"
          />
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({
  href,
  icon,
  name,
}: {
  href: string;
  icon: React.ReactNode;
  name: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="hover:text-secondary transition-colors duration-200"
  >
    {icon}
    <span className="sr-only">{name}</span>
  </motion.a>
);

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} BurgerMaster. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// New OrderNow Component
const OrderNow = () => {
  const [orderType, setOrderType] = useState("delivery");

  return (
    <section id="order" className="py-20 bg-secondary text-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Order Now
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <OrderButton
              active={orderType === "delivery"}
              onClick={() => setOrderType("delivery")}
            >
              Delivery
            </OrderButton>
            <OrderButton
              active={orderType === "pickup"}
              onClick={() => setOrderType("pickup")}
            >
              Pickup
            </OrderButton>
            <OrderButton
              active={orderType === "dine-in"}
              onClick={() => setOrderType("dine-in")}
            >
              Dine-In
            </OrderButton>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            {orderType === "delivery" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Delivery Options</h3>
                <p className="mb-4">
                  Enter your address to see delivery options:
                </p>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-200">
                  Find Restaurants
                </button>
              </div>
            )}
            {orderType === "pickup" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Pickup Options</h3>
                <p className="mb-4">Find a BurgerMaster location near you:</p>
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-200">
                  Find Locations
                </button>
              </div>
            )}
            {orderType === "dine-in" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Dine-In Information
                </h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <MapPin className="mr-2" /> 123 Burger Street, Foodville, CA
                    90210
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-2" /> (555) 123-4567
                  </p>
                  <p className="flex items-center">
                    <Clock className="mr-2" /> Open daily: 11:00 AM - 10:00 PM
                  </p>
                </div>
                <button className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-200">
                  Make a Reservation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const OrderButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`mx-2 px-6 py-2 rounded-full ${
      active ? "bg-primary text-white" : "bg-white text-primary"
    }`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

// Updated Main Component
export default function Home() {
  return (
    <main className="bg-background text-text">
      <Header />
      <Hero />
      <AboutUs />
      <Menu />
      <OrderNow />
      <SocialMedia />
      <Footer />
    </main>
  );
}
