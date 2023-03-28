import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getPexelsPhotos } from './pexels';





function App() {

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const loadPhotos = async () => {
      const results = await getPexelsPhotos('landscape');
      setPhotos(results);
    };
    loadPhotos();
  }, []);

  return (
    <div className="App">
      <div class="colorback">
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
          <header>
          <img src="/Diseño sin título (1)_preview_rev_1.png"/>
          <h2> Worldly Views</h2> 
        </header>
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 headersize">

            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">Las mejores fotos de stock gratis, imagenes libres de regalías y vídeos compartidos por creadores.</h1>

              <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  </div>
                  <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Categoria" />

                </div>
              </div>        <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
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
      </div>

      <h1 className='tittle'>Worldly Views</h1>  

      <div > 
      <div className='contentpresent'>
      <img src='https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600' />

      <p class="font-serif">¡Hola! Bienvenido/a a nuestra página web. Somos una plataforma que busca ofrecer una amplia variedad de recursos visuales de alta calidad para que puedas utilizar en tus proyectos personales o comerciales. Nuestro objetivo es brindarte una experiencia agradable y satisfactoria al momento de buscar y descargar los recursos que necesites.</p>
      </div>

      <div className='contentpresent'>
      <p class="font-serif">En nuestra página encontrarás una gran cantidad de fotografías, videos y música, todos ellos seleccionados cuidadosamente por nuestro equipo de expertos para asegurarnos de que cumplan con los más altos estándares de calidad. Además, nuestro sitio web cuenta con una interfaz fácil de usar y un motor de búsqueda eficiente que te permitirá encontrar rápidamente lo que necesitas.</p>
      <img src='https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&w=600' />
      </div>

      <div className='contentpresent'>
      <img src='https://images.pexels.com/photos/3228833/pexels-photo-3228833.jpeg?auto=compress&cs=tinysrgb&w=600' />
      <p >Sabemos lo importante que es contar con recursos visuales impactantes y de alta calidad para darle vida a tus proyectos. Ya sea que estés creando un sitio web, un proyecto escolar, una presentación de negocios, o cualquier otra cosa, estamos seguros de que encontrarás en nuestra plataforma el recurso visual que necesitas para hacer que tu proyecto destaque.</p>
      </div> <br/><br/>
      <p className='textinicio' >En resumen, estamos comprometidos con ofrecerte una experiencia de usuario excepcional <br/> y brindarte acceso a recursos visuales de alta calidad para que puedas llevar tus proyectos al siguiente nivel. <br/> Esperamos que disfrutes de nuestra plataforma y que encuentres lo que necesitas para hacer realidad tus ideas. ¡Gracias por visitarnos!</p>


      </div>












































      <div class="contentPerson">
   

        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 shadow-xl bg-white rounded-lg backgroundfondo">
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

      </div>





      <div class="gridContentdouble">


        <div class="contenteat">
          <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 shadow-xl bg-white rounded-lg  backgroundfondo">

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





        <div class="contentcity item-2">
          <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 shadow-xl bg-white rounded-lg backgroundfondo">

            <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 contentimage">
              <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=400
          " alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>




              <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>


              <div class="gridname">

                <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img src="https://images.pexels.com/photos/1121782/pexels-photo-1121782.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>


                <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img src="https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>

              </div>


              <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://images.pexels.com/photos/11511728/pexels-photo-11511728.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>

            </div>
          </div>
        </div>





        <div className='contentAPIPexels'>
      {photos.map((photo) => (
        <img key={photo.id} className="photo" src={photo.src.medium} alt={photo.url} />
      ))}
    </div>







      </div>



    </div>


  );
}

export default App;
