import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export const handleErrors = (
  response: HttpErrorResponse
): Observable<never> => {
  switch (response.status) {
    case HttpStatusCode.InternalServerError:
      return throwError(() => response.error ?? 'Error interno del servidor.');
    case HttpStatusCode.BadRequest:
      return throwError(() => response.error ?? 'Uno o más campos no son correctos.');
    case HttpStatusCode.NotFound:
      return throwError(() => response.error ?? 'Error 404: no se encuentra el recurso.');
    case HttpStatusCode.Forbidden:
      return throwError(() => response.error ?? 'Error 403: acceso restringido.');
    case HttpStatusCode.Unauthorized:
      return throwError(() => response.error ?? 'Error 401: no se encuentra autorizado.');
  }
  return throwError(() => response.error ?? 'Algo salió mal');
};
