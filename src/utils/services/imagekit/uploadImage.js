import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
  privateKey: import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
});

export const uploadImage = async (file, prefixName = "tetilib") => {
  const res = await imagekit.upload({
    file: file,
    fileName: prefixName,
    folder: "tetilib",
  });
  return res.url;
};
