"use client";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu } from "lucide-react";

export default function Home() {
    const [cart, setCart] = useState(0);
    const precioProducto = 40000;
    const subtotal = cart * precioProducto;
    const envio = cart > 0 ? 10000 : 0;
    const total = subtotal + envio;
    const [imagenActual, setImagenActual] = useState(0);
      useEffect(() => {
        const intervalo = setInterval(() => {
          setImagenActual((prev) =>
            prev === productos[0].imagenes.length - 1
              ? 0
              : prev + 1
          );
        }, 3000);

        return () => clearInterval(intervalo);
      }, []);
    const productos = [
      {
       nombre: "Kit x3 Victoria Secret",

       precio: 58000,

       imagenes: [
         "/productos/bombshell.jpeg",
         "/productos/coconutpassion.jpeg",
         "/productos/juicedberry.jpeg",
         "/productos/mangotemptation.jpeg",
         "/productos/pinkchiffon.jpeg",
         "/productos/pureseduction.jpeg",
         "/productos/vanillalace.jpeg",
         "/productos/watermelon.jpeg",
        ],

        descripcion:
          "Splash Premium 250ml, Crema Premium 236ml y bolsa Victoria Secret.",
      },
    ];
    const kitsX2 = [
      {
        nombre: "Bombshell",
        precio: 45000,
        imagen: "/productos/bombshell.jpeg",
      },
      {
        nombre: "Coconut Passion",
        precio: 45000,
        imagen: "/productos/coconutpassion.jpeg",
      },
      {
        nombre: "Juiced Berry",
        precio: 45000,
        imagen: "/productos/juicedberry.jpeg",
      },
      {
        nombre: "Mango Temptation",
        precio: 45000,
        imagen: "/productos/mangotemptation.jpeg",
      },
      {
        nombre: "Pink Chiffon",
        precio: 45000,
        imagen: "/productos/pinkchiffon.jpeg",
      },
      {
        nombre: "Pure Seduction",
        precio: 45000,
        imagen: "/productos/pureseduction.jpeg",
      },
      {
        nombre: "Vanilla Lace",
        precio: 45000,
        imagen: "/productos/vanillalace.jpeg",
      },
      {
        nombre: "Watermelon",
        precio: 45000,
        imagen: "/productos/watermelon.jpeg",
      },
    ];
    const SplashIndividuales = [
      {
        nombre: "Bombshell",
        precio: 20000,
        imagen: "/productos/splashbombshell.jpeg.jpeg",
      },
      {
        nombre: "Coconut Passion",
        precio: 20000,
        imagen: "/productos/splashcoconutpassion.jpeg.jpeg",
      },
      {
        nombre: "Juiced Berry",
        precio: 20000,
        imagen: "/productos/splashjuicedberry.jpeg.jpeg",
      },
      {
        nombre: "Mango Temptation",
        precio: 20000,
        imagen: "/productos/splashmangotemptation.jpeg.jpeg",
      },
      {
        nombre: "Pink Chiffon",
        precio: 20000,
        imagen: "/productos/splashpinkchiffon.jpeg.jpeg",
      },
      {
        nombre: "Pure Seduction",
        precio: 20000,
        imagen: "/productos/splashpureseduction.jpeg.jpeg",
      },
      {
        nombre: "Vanilla Lace",
        precio: 20000,
        imagen: "/productos/splashvainillalace.jpeg.jpeg",
      },
      {
        nombre: "Watermelon",
        precio: 20000,
        imagen: "/productos/splashwatermelon.jpeg.jpeg",
      },
      {
        nombre: "Love Spell",
        precio: 20000,
        imagen: "/productos/splashlovespell.jpeg.jpeg",
      },
      {
        nombre:"Aqua Kiss",
        precio: 20000,
        imagen: "/productos/splashaquakiss.jpeg.jpeg",
      },
      {
        nombre:"Candy Baby",
        precio: 20000,
        imagen: "/productos/splashcandybaby.jpeg.jpeg",
      }
    ];
    const [mensaje, setMensaje] = useState("");
    const [abrirCarrito, setAbrirCarrito] = useState(false);
    
    const agregarCarrito = () => {
     setCart(cart + 1);

     setMensaje("Producto agregado al carrito");

     setTimeout(() => {
     setMensaje("");
     }, 2000);
     };
  return (
    <main className="min-h-screen bg-pink-50">
      {mensaje && (
      <div className="fixed top-24 right-6 bg-pink-600 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 animate-bounce">
      {mensaje}
      </div>
      )}

      {/* NAVBAR */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-3xl font-extrabold text-pink-600">
            Yi Magic Shop
          </h1>

          <nav className="hidden md:flex gap-8 text-gray-700 font-semibold">
            <a href="#">Inicio</a>
            <a href="#">Catálogo</a>
            <a href="#">Ofertas</a>
            <a href="#">Contacto</a>
          </nav>

          <div className="flex items-center gap-5">

            <button
            onClick={() => setAbrirCarrito(true)}
            className="relative"
            >
              <ShoppingCart className="w-7 h-7 text-pink-600" />

              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                {cart}
              </span>
            </button>

            <button className="md:hidden">
              <Menu />
            </button>

          </div>

        </div>
      </header>
      {/* PANEL CARRITO */}
      {abrirCarrito && (
        <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-2xl z-50 p-6 flex flex-col">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold text-pink-600">
              Tu Carrito
            </h2>

            <button
              onClick={() => setAbrirCarrito(false)}
              className="text-2xl"
            >
              ✕
            </button>

          </div>

          <div className="flex-1">

            <div className="bg-pink-50 p-4 rounded-2xl mb-4">

              <h3 className="font-bold text-xl mb-4">
               Resumen del Pedido
              </h3>

             <div className="flex justify-between mb-2">
              <span>Productos</span>
              <span>{cart}</span>
             </div>

             <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString()}</span>
             </div>

             <div className="flex justify-between mb-2">
              <span>Envío</span>
              <span>${envio.toLocaleString()}</span>
             </div>

             <hr className="my-4" />

             <div className="flex justify-between text-2xl font-bold text-pink-600">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
             </div>

            </div>

          </div>

          <button className="bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-2xl text-lg font-bold shadow-xl transition">
            Finalizar Compra
          </button>

        </div>
      )}

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-b from-pink-100 to-pink-50">

        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 mb-6">
          Yi Magic Shop
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mb-10">
          Regalos premium, detalles únicos y experiencias que enamoran.
        </p>

        <div className="flex flex-col md:flex-row gap-5">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl transition">
            Comprar Ahora
          </button>

          <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-100 px-8 py-4 rounded-2xl text-lg font-semibold transition">
            Ver Catálogo
          </button>
        </div>

      </section>

      {/* PRODUCTOS */}
      <section className="py-20 px-8">

        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Productos Destacados
        </h2>
          <section className="py-20 px-6">

            <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">
              ✨ Kits x3 Victoria's Secret
            </h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

              <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Próximamente
                </h3>

                <p>
                  Aquí irán los kits x3.
                </p>
              </div>

            </div>

          </section>

          <section className="py-20 px-6 bg-pink-50">

            <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">
              🎁 Kits x2 Victoria's Secret
            </h2>

            <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">

              {kitsX2.map((kit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                  <img
                    src={kit.imagen}
                    alt={kit.nombre}
                    className="h-72 w-full object-cover"
                  />

                  <div className="p-5">

                    <h3 className="text-xl font-bold">
                      {kit.nombre}
                    </h3>

                    <p className="text-pink-600 font-bold text-lg mt-2">
                      ${kit.precio.toLocaleString()}
                    </p>

                    <p className="text-gray-600 mt-3">
                      Incluye 1 Splash Premium, 1 Crema Premium y Bolsa Victoria's Secret.
                    </p>

                    <button
                      onClick={agregarCarrito}
                      className="w-full mt-4 bg-pink-600 text-white py-3 rounded-xl"
                    >
                      Agregar al carrito
                    </button>

                  </div>
                </div>
              ))}

            </div>

          </section>

          <section className="py-20 px-6">

            <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">
              🌸 Splash Individuales
            </h2>

            <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">

              {SplashIndividuales.map((splash, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                  <img
                    src={splash.imagen}
                    alt={splash.nombre}
                    className="h-72 w-full object-cover"
                  />

                  <div className="p-5">

                    <h3 className="text-xl font-bold">
                      {splash.nombre}
                    </h3>

                    <p className="text-pink-600 font-bold text-lg mt-2">
                      ${splash.precio.toLocaleString()}
                    </p>

                    <p className="text-gray-600 mt-3">
                      Incluye 1 Splash Premium.
                    </p>

                    <button
                      onClick={agregarCarrito}
                      className="w-full mt-4 bg-pink-600 text-white py-3 rounded-xl"
                    >
                      Agregar al carrito
                    </button>

                  </div>
                </div>
              ))}

            </div>

          </section>

          <section className="py-20 px-6 bg-pink-50">

            <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">
              🧴 Cremas Individuales
            </h2>

            <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">

              <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
                Próximamente
              </div>

            </div>

          </section>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {productos.map((producto, index) => (

             <div
               key={index}
               className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition"
             >

               <img
                 src={producto.imagenes[imagenActual]}
                 className="h-80 w-full object-cover"
               />
                
                <div className="flex justify-center gap-4 py-4">

                 <button
                   onClick={() =>
                    setImagenActual(
                      imagenActual === 0
                        ? producto.imagenes.length - 1
                        : imagenActual - 1
                    )
                   }
                   className="bg-pink-500 text-white px-4 py-2 rounded-full"
                 >
                  ⬅
                 </button>

                 <button
                   onClick={() =>
                     setImagenActual(
                       imagenActual === producto.imagenes.length - 1
                         ? 0
                         : imagenActual + 1
                    )
                   }
                   className="bg-pink-500 text-white px-4 py-2 rounded-full"
                 >
                  ➡
                 </button>

                </div>
                
                <div className="p-6">

                  <h3 className="text-3xl font-bold mb-3">
                    {producto.nombre}
                  </h3>

                  <p className="text-gray-600 mb-5">
                    {producto.descripcion}
                  </p>

                  <div className="flex justify-between items-center">

                    <span className="text-2xl font-bold text-pink-600">
                      ${producto.precio.toLocaleString()}
                    </span>

                    <button
                     onClick={agregarCarrito}
                     className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl"
                    >
                      Agregar
                  </button>

                </div>

              </div>

             </div>

          ))}
        
        </div>
      
      </section>

      {/* BOTON WHATSAPP */}
      <a
      href="https://wa.me/573246001180?text=Hola%20quiero%20información%20de%20Yi%20Magic%20Shop"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition hover:scale-110"
      >
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-9 h-9"
      />
     </a>

    </main>
  );
}
