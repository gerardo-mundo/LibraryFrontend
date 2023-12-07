import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export const handleErrors = (
  response: HttpErrorResponse
): Observable<never> => {
  switch (response.status) {
    case HttpStatusCode.InternalServerError:
      return throwError(() => 'Error interno del servidor.');
    case HttpStatusCode.BadRequest:
      return throwError(() => 'Uno o más campos no son correctos.');
    case HttpStatusCode.NotFound:
      return throwError(() => 'Error 404: no se encuentra el recurso.');
    case HttpStatusCode.Forbidden:
      return throwError(() => 'Error 403: acceso restringido.');
    case HttpStatusCode.Unauthorized:
      return throwError(() => 'Error 401: no se encuentra autorizado.');
  }
  return throwError(() => 'Algo salió mal');
};
