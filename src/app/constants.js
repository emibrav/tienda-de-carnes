const phoneNumber = process.env.REACT_APP_PHONE_NUMBER
const sheet = process.env.REACT_APP_GOOGLE_SHEET_ENDPOINT

export const INFO = {
  title: "CERDO VA - Lista de precios por mayor",
  phone: phoneNumber,
  social: {
    instagram: "instagram.com/",
    facebook: "facebook.com/",
    twitter: "twitter.com/",
  },
  sheet: sheet,
}
