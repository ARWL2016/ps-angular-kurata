import { Injectable } from '@angular/core'

@Injectable() 
export class ListService {
  getTerms(): string[] {
    return [
    'directive', 
    'pipe', 
    'interface', 
    'component', 
    'module', 
    'decorator', 
    'service', 
    'dependency injection', 
    'provider', 
    'typescript'
    ]; 
  }
}