module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "strapi-chatgpt": {
    enabled: true,
  },
  "image-optimizer": {
    enabled: true,
    config: {
      include: ["jpeg", "jpg", "png"],
      exclude: ["gif"],
      formats: ["original", "webp", "avif"],
      sizes: [
        {
          name: "xs",
          width: 300,
        },
        {
          name: "sm",
          width: 768,
        },
        {
          name: "md",
          width: 1280,
        },
        {
          name: "lg",
          width: 1920,
        },
        {
          name: "xl",
          width: 2840,
          withoutEnlargement: true,
        },
        {
          name: "original",
        },
      ],
      additionalResolutions: [1.5, 3],
      quality: 70,
    },
  },
});
