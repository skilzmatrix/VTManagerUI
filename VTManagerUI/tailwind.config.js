module.exports = {
  content: [
      "./src/**/*.{html,ts}",
    ],
  theme: {
    extend: {
      colors: {
        'dark-text': '#00000099',
        'light-text': '#ffffff99',
        'head-text':'#000000DE',
        'gray':'#00000061',
        'dark-gray' : '#F5F8FA',
        'light-blue': '#56CBE5',
        'primary-blue':'#56CAE5',
        'medium-blue' : '#26A6C3',
        'dark-blue': '#009CB2',
        'border-gray':'#0000001F',

      },
    },
    fontFamily: {
          'body': ['Raleway'],
          'sans':['Raleway'],
    },
    fontWeight: {
      'font-thin': 100,
      'font-extralight': 200,
      'font-light': 300,
      'font-normal': 400,
      'font-medium': 500,
      'font-semibold': 600,
      'font-bold': 700,
      'font-extrabold': 800,
      'font-black': 900,
    }

  },
  plugins: [
  ],
}
