import { Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlinePhoto, HiTrash } from "react-icons/hi2";
import { RenderIf } from "./RenderIf";
import { useFileUpload } from "use-file-upload";
import { uploadImage } from "@/utils/services/imagekit/uploadImage";

export function ImageUpload({
  setIsImageLoading,
  setImageUrl,
  initialImageUrl,
}) {
  const [_, selectImage] = useFileUpload();
  const [url, setUrl] = useState(initialImageUrl);

  const removeImageHandler = () => {
    setImageUrl(null);
    setIsImageLoading(true);
    setUrl(null);
  };

  return (
    <VStack justifyContent="center" w="full" h="full">
      <RenderIf when={!url}>
        <Center
          border={1}
          borderStyle="dashed"
          borderRadius="2xl"
          borderColor="gray.500"
          w="full"
          h="full"
          cursor="pointer"
          minH="240px"
          onClick={() => {
            // Single File Upload accepts only images
            setIsImageLoading(true);
            selectImage({ accept: "image/*" }, (image) => {
              setUrl(image.source);
              uploadImage(image.file).then((url) => {
                setImageUrl(url);
                console.log("image uploaded with url:", url);
                setIsImageLoading(false);
              });
            });
          }}
        >
          <VStack spacing={-2}>
            <HiOutlinePhoto style={{ height: "120px", width: "100%" }} />
            <Text>
              Click to <strong>Select Image</strong> {url}
            </Text>
          </VStack>
        </Center>
      </RenderIf>

      <RenderIf when={url}>
        <Image
          src={url}
          rounded="md"
          border={1}
          borderStyle="solid"
          borderColor="gray.200"
        ></Image>
        <Button
          leftIcon={<HiTrash />}
          onClick={removeImageHandler}
          size="sm"
          colorScheme="red"
          variant="outline"
        >
          Clear Image
        </Button>
      </RenderIf>
    </VStack>
  );
}
