import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  // Función para hacer un hash SHA-256 de un texto
  hashSHA256(text: string): string {
    const hash = CryptoJS.SHA256(text);
    return hash.toString(CryptoJS.enc.Hex);
  }
}
