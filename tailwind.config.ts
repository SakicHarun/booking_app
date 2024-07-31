import type { Config } from "tailwindcss";

const config: Config = {
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

      fontSize:{
      '40px': '40px'
      },


      spacing: {
        '21': '84px',
        '22': '88px',
        '23': '92px',
        '25': '100px',
        '26': '104px',
        '27': '108px',
        '28': '112px',
        '29': '116px',
        '30': '120px',
        '31': '124px', 
        '41': '164px',
        '51': '204px', 
        '61': '244px', 
        '70': '280px', 
        '71': '284px', 
        '81': '324px', 
        '91': '364px',
        '42': '168px',
        '52': '208px', 
        '62': '248px', 
        '82': '328px',
        '88': '384px',
        '92': '368px',
        '100': '400px',
        '110': '440px',
        '200' :'800px',  
        '43': '442px', 
      },

      width:{
      '100' :'400px',
      '150' :'600px',
      '200' :'800px',
      '300' :'1200px',
      '400' :'1600px',
      '500' :'2000px'

      },

      padding:{
        '25' :'100px',
        '26' :'104px',
        '27' :'108px',
        '28' :'112px',
        '29' :'116px',
      },

      height:{
        '81' :'324px',
        '82' :'328px',
        '83' :'332px',
        '84' :'336px',
        '85' :'340px',
        '86' :'344px',
        '87' :'348px',
        '100' :'400px',
        '110' :'440px',
        '120' :'480px',
        '130' :'520px',
        '150' :'600px',
        '200' :'800px',
        '300' :'1200px',
        '400' :'1600px',
        '500' :'2000px'
      },
     
    },
  },
  plugins: [],
};
export default config;
