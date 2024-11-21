import React from "react";
import Textbox from "../components/TextBox";
import { Box } from "@mui/material";


const Messages = () => {
  return (
    <Box>
    <div className="flex-1 p-4 bg-gray-50 flex flex-col">
     <main className="flex-1 flex flex-col overflow-y-scroll">
    <nav>
      <div className="flex items-center justify-center space-x-2 my-4">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-2 text-sm text-gray-500">YESTERDAY</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
    </nav>
    
    <div className="flex-1 overflow-y-auto p-4">
      <ul className="space-y-4">
        {/* Recipient message aligned left */}
        <li className="flex items-start">
          <img className="w-10 h-10 rounded-full mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmnXxtJ7CymbgonpKbTlwl-nER7TG0qZI7w&s" alt="Recipient profile image" />
          <div className="bg-white p-4 rounded-lg shadow max-w-md">
            <p className="text-gray-500 font-light text-sm">
              Hey Erik, I came across a new SaaS software while doing some research. You should definitely check it out.
            </p>
          </div>
        </li>
        
        {/* Sender message aligned right */}
        <li className="flex items-start justify-end">
          <div className="bg-gray-200 max-w-md p-4 rounded-lg shadow">
            <p className="text-gray-500 font-light text-sm">
              Sure, I'd love to learn more about it. Do you have any links or documentation?
            </p>
          </div>
          <img className="w-10 h-10 rounded-full ml-3" src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg" alt="Sender profile image" />
        </li>
        
        <div className="flex items-center justify-center space-x-2 my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">TODAY</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        
        {/* Other messages */}
        <li className="flex items-start">
          <img className="w-10 h-10 rounded-full mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmnXxtJ7CymbgonpKbTlwl-nER7TG0qZI7w&s" alt="Recipient profile image" />
          <div className="bg-white p-4 rounded-lg shadow max-w-md">
            <p className="text-gray-500 font-light text-sm">
              Here you go. There's also a full fledged documentation. Just click on the click in the top right corner.
            </p>
          </div>
        </li>
       
        <li className="flex items-start justify-end">
          <div className="bg-gray-200 max-w-md p-4 rounded-lg shadow">
            <p className="text-gray-500 font-light text-sm">
              Thanks, so do you think this one would be a good fit to manage our projects?
            </p>
          </div>
          <img className="w-10 h-10 rounded-full ml-3" src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg" alt="Sender profile image" />
        </li>
        <li className="flex items-start">
          <img className="w-10 h-10 rounded-full mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmnXxtJ7CymbgonpKbTlwl-nER7TG0qZI7w&s" alt="Recipient profile image" />
          <div className="bg-white p-4 rounded-lg shadow max-w-md">
            <p className="text-gray-500 font-light text-sm">
              You can start by reading the project whitepaper. Everything you need is in there. You can also try the free demo and start exploring features.
            </p>
          </div>
        </li>
       
      </ul>
    </div>
  </main>
      <div className="mt-auto p-4 bg-gray-50">
        <Textbox />
      </div>
    </div>
    </Box>
  );
};

export default Messages;