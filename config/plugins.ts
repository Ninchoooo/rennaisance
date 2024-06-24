export default {
  upload: {
    config: {
//      provider: 'local',
//      sizeLimit: 10000000,
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: `${process.env.CLOUDINARY_KEY}`,
        api_secret: process.env.CLOUDINARY_SECRET
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: 'gmail-api',
      providerOptions: {
        auth: {
          userId: process.env.EMAIL_OAUTH2_USERID,
          clientId: process.env.EMAIL_OAUTH2_CLIENTID,
          clientSecret: process.env.EMAIL_OAUTH2_CLIENTSECRET,
          refreshToken: process.env.EMAIL_OAUTH2_REFRESHTOKEN,
        },
      },
      settings: {
        defaultFrom: process.env.EMAIL_FROM,
        defaultReplyTo: process.env.EMAIL_TO,
      },
    },
  },
};
