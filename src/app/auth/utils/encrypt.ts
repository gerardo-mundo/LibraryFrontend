import * as cryptoJS from 'crypto-js';
import { ENVIRONMENT } from 'src/app/environments/environment';

export const encrypt = (value: string): string => cryptoJS.AES.encrypt(value, ENVIRONMENT.ENCRYPTATION_KEY).toString();

export const decrypt = (value: string): string | null => {
	const val = cryptoJS.AES.decrypt(value, ENVIRONMENT.ENCRYPTATION_KEY).toString(cryptoJS.enc.Utf8);

	if (!val) return null;

	return val;
};
