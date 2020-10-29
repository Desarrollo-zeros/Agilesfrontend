import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { asesorias } from 'src/models/asesorias';
import Swal from 'sweetalert2';

const URLASESORIAS_GET = 'http://localhost:44325/api/Asesor/Asesores';
const URLASESORIAS_GUARDAR = 'http://localhost:44325/api/Advisory/Post';
@Injectable({ providedIn: 'root' })
export class ServiceAsesoriasService {
    constructor(private httpClient: HttpClient) { }

    async getAsesores() {
        return this.httpClient.get<asesorias[]>(URLASESORIAS_GET);
    }

    addAsesorias(asesorias: asesorias) {
        this.httpClient.post(URLASESORIAS_GUARDAR, asesorias).subscribe(Response => {Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'La asesoria ha sido guardada con éxito',
            showConfirmButton: false,
            timer: 1500
          });
        }, error => {Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Problemas al intentar guardar la asesoria',
            showConfirmButton: false,
            timer: 1500
          });});
    }

}