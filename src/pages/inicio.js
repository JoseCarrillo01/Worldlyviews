import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Gallery from '../pexels';

function Inicio() {

    const contentInicioRef = useRef(null);

    const handleClick = () => {
        contentInicioRef.current.scrollIntoView({ behavior: "smooth" });
    };
    
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      console.log(`Categoría seleccionada: ${category}`);
    };
  
      
    return (
        <div className="App">


            <div onload="scrollTo(0,0);" class="colorback">
                <div class="relative isolate px-6 pt-14 lg:px-8 contenheader">
                    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
                            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                            <defs>
                                <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#9089FC" />
                                    <stop offset="1" stop-color="#FF80B5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>











                    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 headersize">

                        <div class="text-center">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">Las mejores fotos de stock gratis, imagenes libres de regalías y vídeos compartidos por creadores.</h1>

                            <div>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    </div>

                                </div>
                            </div>






                            <div class="mt-10 flex items-center justify-center gap-x-6">
                                <a href="#contentInicio"
                                    onClick={handleClick} class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover">Conocenos</a>



                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                        <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
                            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                            <defs>
                                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#9089FC" />
                                    <stop offset="1" stop-color="#FF80B5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>---
















            
            <div className="container">

        <div className="pt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Explora nuestras categorías</h2>
            <p className="mt-4 text-lg text-gray-500">Encuentra imágenes de alta calidad para tus proyectos.</p>
          </div>
          <div className="mt-12 grid gap-5 row-gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div onClick={() => handleCategoryClick('naturaleza')} className="cursor-pointer pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-80">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: outline/cloud-upload" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Naturaleza</h3>
                  <p className="mt-5 text-base text-gray-500">Encuentra imágenes impresionantes de la belleza natural.</p>
                </div>
              </div>
            </div>
            <div onClick={() => handleCategoryClick('arquitectura')} className="cursor-pointer pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-80">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: outline/heart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318A6.96 6.96 0 0112 3a6.96 6.96 0 017.682 3.318c2.12 3.658-.358 8.024-3.682 10.683L12 21l-4-2.318C4.676 19.342 2.198 14.976 4.318 11.318z"></path>
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Arquitectura</h3>
                  <p className="mt-5 text-base text-gray-500">Descubre imágenes impresionantes de la arquitectura moderna y antigua.</p>
                </div>
              </div>
            </div>
            <div onClick={() => handleCategoryClick('comida')} className="cursor-pointer pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-80">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: outline/scale" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l2.862 13.161A2 2 0 007.71 21H16.29a2 2 0 001.847-1.839L21 6m-9-2l-9 9h14l-9-9zm0 0v4"></path>
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Comida</h3>
                  <p className="mt-5 text-base text-gray-500">Encuentra imágenes apetitosas de deliciosos platos de comida.</p>
                </div>
              </div>
            </div>
            <div onClick={() => handleCategoryClick('negocios')} className="cursor-pointer pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-80">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: outline/chart-bar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20V10m0 0L8 14m4-4l4 4m6 0v2a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h2m16 0H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2v-2"></path>
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Negocios</h3>
                  <p className="mt-5 text-base text-gray-500">Encuentra imágenes relacionadas con el mundo de los negocios y las finanzas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

























            <h1 ref={contentInicioRef} id="contentInicio" className="tittle">Worldly Views</h1>

            <div className='container'>
                <div className='contentpresent'>
                    <div className='escritorioimg'>
                        <img src='https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </div>

                    <div className='divtextContent p1' >
                        <p>Hello! Welcome to our website. We are a platform that aims to offer a wide variety of high-quality visual resources that you can use in your personal or commercial projects. Our goal is to provide you with a pleasant and satisfying experience when searching for and downloading the resources you need.</p>
                    </div>

                    <div className='movilimage'>
                        <img src='https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </div>
                </div>

                <div className='contentpresent'>
                    <div className='divtextContent p2' >
                        <p>On our website, you will find a large collection of photographs, videos, and music, all of which have been carefully selected by our team of experts to ensure that they meet the highest standards of quality. Additionally, our website features a user-friendly interface and an efficient search engine that will allow you to quickly find what you need.</p>
                    </div>
                    <div>
                        <img src='https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </div>
                </div>

                <div className='contentpresent'>
                    <div className='escritorioimg'>
                        <img src='https://images.pexels.com/photos/3228833/pexels-photo-3228833.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </div>
                    <div className='divtextContent p1' >
                        <p>We understand how important it is to have impactful and high-quality visual resources to bring your projects to life. Whether you are creating a website, a school project, a business presentation, or anything else, we are confident that you will find the visual resource you need to make your project stand out on our platform.</p>
                    </div>
                    <div className='movilimage'>
                        <img src='https://images.pexels.com/photos/3228833/pexels-photo-3228833.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </div>
                </div>

                <p className='textinicio p2' >In summary, we are committed to providing you with an exceptional user experience and giving you access to high-quality visual resources so that you can take your projects to the next level. We hope that you enjoy our platform and find what you need to bring your ideas to life. Thank you for visiting us!</p>


            </div>

            <h1 className="tittle">You can find a wide variety of images such as:</h1>




            <div class="contentPerson">
            <a href='' >

                <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 shadow-xl bg-white rounded-lg backgroundfondo">
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We have a wide variety of photos of people</h1>

                    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 contentimage">
                        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600
          " alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                        </div>

                        <div class="gridname">


                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8  ">
                                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>


                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>


                        </div>


                        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                        </div>


                        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                        </div>

                    </div>
                </div>
                </a>
            </div>


          
            <div class="gridContentdouble">


                <div class="contenteat">

                    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 shadow-xl bg-white rounded-lg  backgroundfondo">
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">As well as a wide variety of dishes</h1>



                        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 contentimage">


                            <div class="gridname">

                                <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 ">
                                    <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                                </div>


                                <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                                </div>

                            </div>



                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=400
          " alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>



                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>


                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>

                        </div>
                    </div>

                </div>





             


            </div>


        </div>




    );
}

export default Inicio;
