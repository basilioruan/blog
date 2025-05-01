import { pki, util } from "node-forge";

const keyPair = pki.rsa.generateKeyPair({ bits: 2048 });

export function encryptWithPublicKey(text: string): string {
    const publicKey = keyPair.publicKey;
    const encrypted = publicKey.encrypt(text);
    return util.encode64(encrypted);
}

export function decryptWithPrivateKey(encryptedText: string): string {
    const privateKey = keyPair.privateKey;
    const encrypted = util.decode64(encryptedText);
    const decrypted = privateKey.decrypt(encrypted);
    return decrypted;
}