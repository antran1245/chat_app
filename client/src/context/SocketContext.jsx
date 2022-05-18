import { createContext } from 'react';
import io from 'socket.io-client';

export const socket = io(':8000');
export const SocketContext = createContext();