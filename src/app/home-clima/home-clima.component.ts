import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioClimaService } from '../servicio-clima.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-clima',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home-clima.component.html',
  styleUrl: './home-clima.component.css'
})
export class HomeClimaComponent implements OnInit {


inputValor:String='';

weatherData:any;

constructor(private servicioClima:ServicioClimaService){ }

ngOnInit(): void {
  
}
async getValor() {
  try {

      if(this.inputValor==''){
          alert("Ingresa alguna ciudad")
      }else{
        this.servicioClima.buscarLugarId(this.inputValor).subscribe(
          data=>{
           this.weatherData = data;
           console.log(data)
          } 
         )
      }

  } catch (error) {
    
    console.error('Error al obtener la situación meteorológica actual:', error);
    
  }
}



  }

