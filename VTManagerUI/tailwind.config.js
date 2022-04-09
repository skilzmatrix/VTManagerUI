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
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        'body': ['Raleway'],
        'sans':['Raleway'],
        'roboto':['Roboto'],
      },
      fontWeight: {
        'extralight': 100,
        'light': 200,
        'normal': 300,
        'medium': 400,
        'semibold': 500,
        'bold': 600,
        'extrabold': 700,
        'black': 800,
      }
    },


  },
  plugins: [
  ],
}
