import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/public';

export const pb = new PocketBase(env.PUBLIC_POCKETBASE_URL ?? 'http://localhost:8090');
