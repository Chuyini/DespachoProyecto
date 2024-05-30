import { Injectable } from '@angular/core';
import { lawyer } from '../interfaces/lawyer.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LawyersService {
  constructor(private http: HttpClient) {

    this.fetchLawyers();
  }
  private lawyers: lawyer[] = [


  ];

  public fetchLawyers(): void {

    //Hacemos la validacion del localStorege para con el token
    const token = localStorage.getItem("auth_token") ?? "";//el doble signo indica que si no existe que se mande vacio

    this.http.get("http://localhost:8080/api/lawyer", {

      headers: {
        "Authorization": token
      }

    }).subscribe({

      next: (response: any) => {//Lo ponemos de tipo any porque "no sabemos" que nos va a entregar el servidor
        //Que vamos a ejecutar una vez que se pueda resolver completamente la peticion
        console.log(response);
        this.lawyers = response.result;

      },
      error: (error: any) => {
        //Que vamos a ejecutar si hubo cualquier tipo de error
        //Nada nos asegura que todo va a funcionar, el servidor puede
        //no funcionar o estar apagado, internet incluso
        console.log(error);
      }

    });
  }

  public postLawyer(lawyer: lawyer): void {

    console.log(lawyer.id);
    const token = localStorage.getItem("auth_token") ?? "";
    this.http.post("http://localhost:8080/api/lawyer", {
      "name": lawyer.name,
      "specialty": lawyer.specialty,
      "description": lawyer.description,
      "hourlyRate": lawyer.hourlyRate,
      "image": lawyer.image,
      "id": lawyer.id,

      "phone": lawyer.phone
    },
      {
        headers: { "Authorization": token }


      }).subscribe({

        next: (response: any) => {//Lo ponemos de tipo any porque "no sabemos" que nos va a entregar el servidor
          //Que vamos a ejecutar una vez que se pueda resolver completamente la peticion
          console.log(response);
        },
        error: (error: any) => {
          //Que vamos a ejecutar si hubo cualquier tipo de error
          //Nada nos asegura que todo va a funcionar, el servidor puede
          //no funcionar o estar apagado, internet incluso
          console.log(error);
        }

      });
  }
  public initialPage(): lawyer[] {

    this.fetchLawyers();
    return this.lawyers;


  }

  public editLawyer(lawyer: lawyer): void {
    const token = localStorage.getItem("auth_token") ?? "";
    this.http.put("http://localhost:8080/api/lawyer/" + lawyer.id,
      {
        "name": lawyer.name,
        "specialty": lawyer.specialty,
        "description": lawyer.description,
        "hourlyRate": lawyer.hourlyRate,
        "image": lawyer.image,
        "id": lawyer.id,
        "phone": lawyer.phone
      }, {

      headers: {
        "Authorization": token
      }

    }).subscribe({

      next: (response: any) => {//Lo ponemos de tipo any porque "no sabemos" que nos va a entregar el servidor
        //Que vamos a ejecutar una vez que se pueda resolver completamente la peticion
        console.log(response);
      },
      error: (error: any) => {
        //Que vamos a ejecutar si hubo cualquier tipo de error
        //Nada nos asegura que todo va a funcionar, el servidor puede
        //no funcionar o estar apagado, internet incluso
        console.log(error);
      }

    });
  }

  public delete(lawyer: lawyer): void {

    const token = localStorage.getItem("auth_token") ?? "";
    console.log(lawyer.id);

    this.http.delete("http://localhost:8080/api/lawyer/" + lawyer.id, {

      headers: {
        "Authorization": token
      }
    }).subscribe({


      next: (response: any) => {//Lo ponemos de tipo any porque "no sabemos" que nos va a entregar el servidor
        //Que vamos a ejecutar una vez que se pueda resolver completamente la peticion
        console.log(response);
      },
      error: (error: any) => {
        //Que vamos a ejecutar si hubo cualquier tipo de error
        //Nada nos asegura que todo va a funcionar, el servidor puede
        //no funcionar o estar apagado, internet incluso
        console.log(error);
      }

    });


  }

  public fetchLawyersQuery(searchTerm = ""): void {

    this.http.get("http://localhost:8080/api/tvshows?searchTerm=" + searchTerm).subscribe({

      next: (response: any) => {//Lo ponemos de tipo any porque "no sabemos" que nos va a entregar el servidor
        //Que vamos a ejecutar una vez que se pueda resolver completamente la peticion
        this.lawyers = response.result;

      },
      error: (error: any) => {
        //Que vamos a ejecutar si hubo cualquier tipo de error
        //Nada nos asegura que todo va a funcionar, el servidor puede
        //no funcionar o estar apagado, i nternet incluso
        console.log(error);
      },

    })
  }


  getLawyers(): any[] {
    return this.lawyers;
  }
}
