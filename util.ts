import { randomBytes, ByteArray, hash, encodeBase64, decodeBase64 } from "https://raw.githubusercontent.com/doctor-useless/tweetnacl-deno/master/src/nacl.ts";

async function wait(): Promise<void> {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res();
        }, 1000);
    });
}

export function encodeTextToBase64(input: string): string {
    return encodeBase64(new TextEncoder().encode(input));
}

export function decodeBase64ToText(input: string): string {
    return new TextDecoder().decode(decodeBase64(input));
}