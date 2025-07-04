import { signal } from '@preact/signals';

const tokenSignal = signal(localStorage.getItem('token') || '');


export default tokenSignal;