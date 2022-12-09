import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: "public_CW/wIximcwh/LkGadhJrK9LUgZg=",
  privateKey: "private_kS7hBwrl5EMFOWhfYqiR74n0kLk=",
  urlEndpoint: "https://ik.imagekit.io/lutfiandri",
});

export const uploadImage = async (file, prefixName = "tetilib") => {
  const res = await imagekit.upload({
    file: file,
    fileName: prefixName,
    folder: "tetilib",
  });
  return res.url;
};
