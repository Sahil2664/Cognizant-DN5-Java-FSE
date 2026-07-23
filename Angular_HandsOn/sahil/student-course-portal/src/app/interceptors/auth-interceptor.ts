import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Intercepting request:', req.url);
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: 'Bearer my-dummy-token-123'
    }
  });
  return next(clonedRequest);
};
