// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SignUp from "./auth/SignUp";
// import UserDetails from "./UserDetails";
// import Table from "./Table";
// import SignIn from "./auth/SingIn";

// export const Sidebar2 = () => {
//   const [showProjectsMenu, setShowProjectsMenu] = useState(false);

//   const Menus = [
//     { title: "User", path: "/", icon: "👤", component: "" },
//     { title: "Pages", icon: "📄", component: "" },
//     { title: "Media", icon: "📷", component: "", spacing: true },
//     {
//       title: "Projects ▼",
//       icon: "🚀",
//       submenu: true,
//       component: "",
//       submenuItems: [
//         { title: "Submenu 1", icon: "1️⃣" },
//         { title: "Submenu 2", icon: "2️⃣" },
//         { title: "Submenu 3", icon: "3️⃣" },
//       ],
//     },
//     { title: "table", icon: "📊", component: <Table /> },
//     { title: "Profile", icon: "👥", component: <UserDetails />, spacing: true },
//     { title: "Signup", icon: "✏️", component: <SignUp /> },
//     { title: "SignIn", icon: "🔒", component: <SignIn /> },
//   ]; 

//   return (
//     <>
//       <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-purple-600 dark:border-gray-700">
//         <div class="px-3 py-3 lg:px-5 lg:pl-3">
//           <div class="flex items-center justify-between">
//             <div class="flex items-center justify-start rtl:justify-end">
//               <button
//                 data-drawer-target="logo-sidebar"
//                 data-drawer-toggle="logo-sidebar"
//                 aria-controls="logo-sidebar"
//                 type="button"
//                 class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               >
//                 <span class="sr-only">Open sidebar</span>
//                 <svg
//                   class="w-6 h-6"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http:www.w3.org/2000/svg"
//                 >
//                   <path
//                     clip-rule="evenodd"
//                     fill-rule="evenodd"
//                     d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//                   ></path>
//                 </svg>
//               </button>
//               <a href="https:flowbite.com" class="flex ms-2 md:me-24">
//                 <img
//                   src="https:flowbite.com/docs/images/logo.svg"
//                   class="h-8 me-3"
//                   alt="FlowBite Logo"
//                 />
//                 <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
//                   Flowbite
//                 </span>
//               </a>
//             </div>
//             <div class="flex items-center">
//               <div class="flex items-center ms-3">
//                 <div>
//                   <button
//                     type="button"
//                     class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//                     aria-expanded="false"
//                     data-dropdown-toggle="dropdown-user"
//                   >
//                     <span class="sr-only">Open user menu</span>
//                     <img
//                       class="w-8 h-8 rounded-full"
//                       src="https:flowbite.com/docs/images/people/profile-picture-5.jpg"
//                       alt="user photo"
//                     ></img>
//                   </button>
//                 </div>
//                 <div
//                   class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
//                   id="dropdown-user"
//                 >
//                   <div class="px-4 py-3" role="none">
//                     <p
//                       class="text-sm text-gray-900 dark:text-white"
//                       role="none"
//                     >
//                       Neil Sims
//                     </p>
//                     <p
//                       class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
//                       role="none"
//                     >
//                       neil.sims@flowbite.com
//                     </p>
//                   </div>
//                   <ul class="py-1" role="none">
//                     <li>
//                       <a
//                         href="/"
//                         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
//                         role="menuitem"
//                       >
//                         Dashboard
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/"
//                         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
//                         role="menuitem"
//                       >
//                         Settings
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/"
//                         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
//                         role="menuitem"
//                       >
//                         Earnings
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/"
//                         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
//                         role="menuitem"
//                       >
//                         Sign out
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <aside
//         id="logo-sidebar"
//         class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
//         aria-label="Sidebar"
//       >
//         <div
//           id="drawer-navigation"
//           class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
//           tabindex="-1"
//           aria-labelledby="drawer-navigation-label"
//         >
//           <h5
//             id="drawer-navigation-label"
//             class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
//           >
//             Menu
//           </h5>
//           <button
//             type="button"
//             data-drawer-hide="drawer-navigation"
//             aria-controls="drawer-navigation"
//             class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
//           >
//             <svg
//               aria-hidden="true"
//               class="w-5 h-5"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//             <span class="sr-only">Close menu</span>
//           </button>
//         </div>
//         <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
//           <ul class="space-y-2 font-medium">
//             {Menus.map((item, index) => (
//               <li key={index}>
//                 {item.submenu ? (
//                   <div class="group">
//                     {/* Render main menu item with icon and dropdown */}
//                     <div
//                       onClick={() => setShowProjectsMenu(!showProjectsMenu)}
//                       class="flex items-center p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                     >
//                       <span class="text-lg">{item.icon}</span>
//                       <span class="ms-3">{item.title}</span>
//                     </div>

//                     {/* Render dropdown submenu if Projects menu is clicked */}
//                     {showProjectsMenu && (
//                       <ul class="pl-4">
//                         {item.submenuItems.map((submenuItem, subIndex) => (
//                           <li key={subIndex}>
//                             <Link
//                               to=""
//                               class="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                             >
//                               <span class="text-lg">{submenuItem.icon}</span>
//                               {submenuItem.title}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 ) : (
//                   // Render regular menu item with icon
//                   <Link
//                     to=""
//                     class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                   >
//                     <span class="text-lg">{item.icon}</span>
//                     <span class="ms-3">{item.title}</span>
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </aside>
//       {/* <div class="p-4 sm:ml-64">
//         <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
//           <Table></Table>
//           <UserDetails></UserDetails>
//    <SignIn></SignIn>
//    <SignUp></SignUp>
//         </div>
//       </div> */}
//     </>
//   );
// };




///////////////// SIDEBAR CLONE 3 /////////////////////////




// import React, { useState } from 'react';
// import { BsArrowLeftShort, BsBalloonFill, BsChevronDown, BsSearch} from 'react-icons/bs';
// import {RiDashboardFill} from "react-icons/ri"
// import Table from './Table';
// import { Link } from 'react-router-dom';
// import SignIn from './auth/SingIn';
// import SignUp from "./auth/SignUp";
// import UserDetails from './UserDetails';

// const Sidebar = () => {
//   const [open, setOpen] = useState(true);
//   const [submenuOpen, setSubmenuOpen]= useState(false)
//   const Menus = [
//     { title: "User", path: "/profile", component:<UserDetails></UserDetails> },
//     { title: "Pages",component:<SignIn></SignIn> },
//     { title: "Media",component:<SignUp></SignUp>, spacing: true },
//     {
//       title: "Projects",
//       submenu: true,
//       component:"",
//       submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 2" }, { title: "Submenu 3" }],
//     },
//     { title: "table",component:<Table></Table>,},
//     { title: "Profile", component:"", spacing: true },
//     { title: "Setting", component:"", },
//     { title: "Logout" ,component:"", },
//   ];
//   return (

//     <div class='flex fixed '>
//       <div
//         class={`bg-dark-purple h-screen p-5 pt-8 ${
//           open ? 'w-72' : 'w-20'
//         } duration-300 relative`}
//       >
//         <BsArrowLeftShort
//           class={`bg-white text-dark-purple text-3xl rounded-full -right-3 absolute top-9 border border-dark-purple cursor-pointer ${
//             !open && 'rotate-180'
//           }`}
//           onClick={() => setOpen(!open)}
//         />
//         <div class='inline-flex'>
//           <BsBalloonFill
//             class={`bg-amber-300 text-5xl mr-2 rounded cursor-pointer block float-left duration-500 ${
//               open ? 'rotate-[360deg]' : ''
//             }`}
//           />
//           <h1
//             class={`text-white origin-left font-medium text-2xl mt-2 duration-300 ${
//               !open ? 'scale-0' : ""
//             }`}
//           >
//             GRAVITY
//           </h1>
//         </div>

//         <div class={`flex items-center rounded-md bg-light-white mt-6 py-2 ${!open ? "px-2.5" : "px-4"}`}>
//           <BsSearch class={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
// <input type="search" placeholder='Search' class={`text-base bg-transparent text-white w-full focus:outline-none ${!open && "hidden"}`}/>
//         </div>
//         <ul class='pt-2'>
// {Menus.map((menu, index)=>(
// <>
//  <Link to={menu.path} key={index}> <li class={`text-gray-300 hover:bg-light-white rounded-md mt-2 text-sm flex items-center gap-x-4 cursor-pointer p-2 ${menu.spacing ? "mt-9" : "mt-2"}`}>
//   <span><RiDashboardFill />
// </span>
//     <span class={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
//     {menu.submenu && open && (
// <BsChevronDown class={`${submenuOpen && "rotate-180"}`} onClick={()=>setSubmenuOpen(!submenuOpen)}/>
// )}
//   </li>
//   </Link>
//  {menu.submenu && submenuOpen && open && (
//   <ul>
//     {menu.submenuItems.map((submenu, index)=>(
// <li key={index} class={`text-base bg-transparent px-5 text-white w-full focus:outline-none ${!open && "hidden"}`}>
//   {submenu.title}
// </li>
//     ))}
//   </ul>
//  )}
// </>
// ))}
//         </ul>
//         </div>
//       <div class="p-4 sm:ml-64 overflow-auto">
//     <div class="p-4 overflow-auto border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
// <Table></Table>
//       {/* <SignUp></SignUp> */}
//   {/* <SignIn></SignIn> */}
//   {/* <UserDetails></UserDetails>    */}
//     </div>
//   </div>
//      </div>
//   );
// };

// export default Sidebar;

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar2() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
