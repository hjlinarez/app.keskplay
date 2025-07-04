
import { signal } from '@preact/signals';

export const userSignal = signal(JSON.parse(localStorage.getItem('user') || '{}'));
export const tokenSignal = signal(localStorage.getItem('token') || '');


