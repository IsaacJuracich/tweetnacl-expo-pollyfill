import { polyfillWebCrypto } from "expo-standard-web-crypto";
import * as Crypto from "expo-crypto";
import "react-native-url-polyfill/auto";
import { Buffer } from "buffer";

polyfillWebCrypto();

function randomBytes(bytesNumber: number) {
  const random = Crypto.getRandomBytes(bytesNumber);
  return random;
}

global.Buffer = global.Buffer || Buffer;
//@ts-ignore
global.randomBytesFunction = randomBytes;
