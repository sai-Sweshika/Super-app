import RegistrationForm from "../Components/RegistrationForm";

function Register() {
  return (
    <div className="min-h-screen flex bg-black">

      {/* Left Side */}
      <div className="hidden lg:block w-1/2 relative">

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
          alt="background"
          className="w-full h-screen object-cover"
        />

        <div className="absolute inset-0 bg-black/35"></div>

        <div className="absolute bottom-14 left-12 z-10 max-w-lg">
          <h1 className="text-white text-6xl font-bold leading-tight">
            Discover new things
            <br />
            on SuperApp
          </h1>
        </div>

      </div>

      {/* Right Side */}

      <div className="w-full lg:w-1/2 flex justify-center items-center bg-black">

        <RegistrationForm />

      </div>

    </div>
  );
}

export default Register;






// import RegistrationForm from "../Components/RegistrationForm";

// function Register() {
//   return (
//     <div className="min-h-screen grid lg:grid-cols-2 bg-black">

//       {/* Left Side */}
//       <div
//         className="hidden lg:flex relative items-end p-12 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>

//         <div className="relative z-10">
//           <h1 className="text-white text-5xl font-bold leading-tight">
//             Discover new things
//             <br />
//             on SuperApp
//           </h1>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center justify-center p-8">
//         <RegistrationForm />
//       </div>

//     </div>
//   );
// }

// export default Register;