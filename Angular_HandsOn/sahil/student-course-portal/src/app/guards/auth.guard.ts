import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Simulated authentication check
  const isAuthenticated = true; // In a real app, this would check a service
  
  if (isAuthenticated) {
    console.log('AuthGuard: Access granted to', state.url);
    return true;
  } else {
    console.log('AuthGuard: Access denied. Redirecting to home.');
    return router.parseUrl('/');
  }
};
