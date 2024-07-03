import * as cryptoJS from 'crypto-js';

import { ENVIRONMENT } from '../../../environments/environment.development';

const ENCRIPTATION_KEY = ENVIRONMENT.ENCRYPTED_KEY;

export const encrypt = (value: string): string => cryptoJS.AES.encrypt(value, ENCRIPTATION_KEY).toString();

export const decrypt = (value: string): string | null => {
	const val = cryptoJS.AES.decrypt(value, ENCRIPTATION_KEY).toString(cryptoJS.enc.Utf8);

	if (!val) return null;

	return val;
};
