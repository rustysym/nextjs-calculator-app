/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "very-dark-desaturated-blue-main": "hsl(222, 26%, 31%)",
        "very-dark-desaturated-blue-toggle": "hsl(223, 31%, 20%)",
        "very-dark-desaturated-blue-screen": "hsl(224, 36%, 15%)",
        "desaturated-dark-blue-background": "hsl(225, 21%, 49%)",
        "desaturated-dark-blue-shadow": "hsl(224, 28%, 35%)",
        "red-background-toggle": "hsl(6, 63%, 50%)",
        "dark-red-shadow": "hsl(6, 70%, 34%)",
        "grayish-orange-shadow": "hsl(28, 16%, 65%)",
        "light-grayish-orange": "hsl(30, 25%, 89%)",
        "light-gray-background": "hsl(0, 0%, 90%)",
        "light-gray-toggle": "hsl(0, 5%, 81%)",
        "light-gray-screen": "hsl(0, 0%, 93%)",
        "light-cyan-background": "hsl(185, 42%, 37%)",
        "light-orange-background": "hsl(25, 98%, 40%)",
        "light-yellow-background": "hsl(45, 7%, 89%)",
        "very-dark-violet-toggle": "hsl(268, 71%, 12%)",
        "very-dark-violet-keys": "hsl(281, 89%, 26%)",
        "very-dark-violet-cyan": "hsl(176, 100%, 44%)",
        "very-dark-violet-key-background":"hsl(268, 47%, 21%)"
      },
      boxShadow: {
        grayish: "0px 2px 1px 0.5px hsl(28, 16%, 65%)",
        blue: "0px 2px 1px 0.5px hsl(224, 28%, 35%)",
        red: "0px 2px 1px 0.5px hsl(6, 70%, 34%)",
        cyan: "0px 2px 1px 0.5px hsl(185, 58%, 25%)",
        orange: "0px 2px 1px 0.5px hsl(25, 99%, 27%)",
        yellow: "0px 2px 1px 0.5px hsl(35, 11%, 61%)",
        violet: "0px 2px 1px 0.5px hsl(285, 91%, 52%)",
        lightcyan: "0px 2px 1px 0.5px hsl(177, 92%, 70%)"
      },
    },
  },
  plugins: [
    require('tailwindcss-themer')({
      themes:[
        {
          name:'darkblue',
          selectors: ['.darkblue', '[data-theme="dark-blue"]']
        },
        {
          name:'light',
          selectors: ['.light', '[data-theme="light"]']
        },
        {
          name:'darkviolet',
          selectors: ['.darkviolet', '[data-theme="dark-violet"]']
        }
      ]
    })
  ],
};
