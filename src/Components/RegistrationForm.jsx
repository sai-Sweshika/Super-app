import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

function RegistrationForm() {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};

    if (!formData.name.trim()) err.name = "Name is required";
    if (!formData.username.trim()) err.username = "Username is required";

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      err.email = "Enter a valid email";
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      err.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!agree) {
      err.agree = "Please accept Terms & Conditions";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setUser(formData);

    navigate("/categories");
  };

  return (
    <div className="w-full max-w-md">

      <h1 className="text-center text-6xl font-bold text-[#72DB73]">
        Super App
      </h1>

      <p className="text-center text-white text-3xl mt-3 mb-8">
        Create your new account
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value,
              })
            }
          />

          {errors.username && (
            <p className="text-red-500 text-sm mt-2">
              {errors.username}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({
                ...formData,
                mobile: e.target.value,
              })
            }
          />

          {errors.mobile && (
            <p className="text-red-500 text-sm mt-2">
              {errors.mobile}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 mt-1">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />

          <label className="text-gray-400 text-sm">
            Share my registration data with SuperApp
          </label>
        </div>

        {errors.agree && (
          <p className="text-red-500 text-sm">
            {errors.agree}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-[#72DB73] hover:bg-green-500 transition text-black font-bold text-xl rounded-full py-4 mt-2"
        >
          SIGN UP
        </button>

        <p className="text-center text-xs text-gray-400 leading-6">
          By clicking on Sign Up, you agree to our{" "}
          <span className="text-white font-semibold">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-white font-semibold">
            Privacy Policy
          </span>
        </p>

      </form>
    </div>
  );
}

export default RegistrationForm;







// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useStore from "../store/useStore";

// function RegistrationForm() {
//   const navigate = useNavigate();

//   const setUser = useStore((state) => state.setUser);

//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     mobile: "",
//   });

//   const [agree, setAgree] = useState(false);

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const error = {};

//     if (!formData.name.trim())
//       error.name = "Name is required";

//     if (!formData.username.trim())
//       error.username = "Username is required";

//     if (
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
//     )
//       error.email = "Invalid Email";

//     if (!/^\d{10}$/.test(formData.mobile))
//       error.mobile = "Mobile must contain 10 digits";

//     if (!agree)
//       error.agree = "Please accept Terms & Conditions";

//     setErrors(error);

//     return Object.keys(error).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setUser(formData);

//     navigate("/categories");
//   };
//   return (
//     <div className="w-full max-w-md px-10 py-10">

//       <h1 className="text-white text-5xl font-bold leading-snug max-w-md">Super App</h1>

//       <p className="text-white text-2xl text-center mt-4">
//         Create your new account
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="mt-10 space-y-5"
//       >

//         <div>

//           <input
//             type="text"
//             placeholder="Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({ ...formData, name: e.target.value })
//             }
//             className="w-full py-4 rounded bg-[#292929] px-5 text-white text-lg outline-none border border-transparent focus:border-[#72DB73]"
//           />

//           {errors.name && (
//             <p className="text-red-500 mt-2 text-sm">
//               {errors.name}
//             </p>
//           )}

//         </div>
// {/*
//         <div>

//           <input
//             type="text"
//             placeholder="Username"
//             value={formData.username}
//             onChange={(e) =>
//               setFormData({ ...formData, username: e.target.value })
//             }
//             className="w-full py-4 rounded bg-[#292929] px-5 text-white text-lg outline-none border border-transparent focus:border-[#72DB73]"
//           />

//           {errors.username && (
//             <p className="text-red-500 mt-2 text-sm">
//               {errors.username}
//             </p>
//           )}

//         </div> */}

//         <div>

//           <input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             className="w-full h-16 rounded bg-[#292929] px-5 text-white text-lg outline-none border border-transparent focus:border-[#72DB73]"
//           />

//           {errors.email && (
//             <p className="text-red-500 mt-2 text-sm">
//               {errors.email}
//             </p>
//           )}

//         </div>

//         <div>

//           <input
//             type="text"
//             placeholder="Mobile Number"
//             value={formData.mobile}
//             onChange={(e) =>
//               setFormData({ ...formData, mobile: e.target.value })
//             }
//             className="w-full h-16 rounded bg-[#292929] px-5 text-white text-lg outline-none border border-transparent focus:border-[#72DB73]"
//           />

//           {errors.mobile && (
//             <p className="text-red-500 mt-2 text-sm">
//               {errors.mobile}
//             </p>
//           )}

//         </div>

//         <div className="flex items-start gap-3 mt-2">

//           <input
//             type="checkbox"
//             checked={agree}
//             onChange={() => setAgree(!agree)}
//             className="mt-1 w-2 h-2 accent-[#72DB73]"
//           />

//           <label className="text-gray-400 text-sm">
//             Share my registration data with SuperApp
//           </label>

//         </div>

//         {errors.agree && (
//           <p className="text-red-500 text-sm">
//             {errors.agree}
//           </p>
//         )}

//         <button
//           className="w-full h-14 rounded-full bg-[#72DB73] text-black font-bold text-xl shadow-lg shadow-green-500/30 "
//         >
//           SIGN UP
//         </button>

//         <p className="text-gray-500 text-xs leading-6 text-center mt-6">

//           By clicking on Sign Up, you agree to our
//           <span className="text-white">
//             {" "}Terms of Service{" "}
//           </span>

//           and

//           <span className="text-white">
//             {" "}Privacy Policy
//           </span>

//         </p>

//       </form>

//     </div>
//   );

// }

// export default RegistrationForm;