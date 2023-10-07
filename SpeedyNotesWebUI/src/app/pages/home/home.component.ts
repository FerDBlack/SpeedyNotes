import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GridData } from 'src/app/model/gridData';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchResults: string[] = [];
  displayedColumns = ['checkBox','folder', 'name', 'date'];
  dataSource: MatTableDataSource<GridData>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
     const users: GridData[] = [];
    for (let i = 1; i <= 50; i++) { users.push(this.createEntries(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

    
  }
 performSearch(query: string) {
    // Realiza la búsqueda aquí y actualiza this.searchResults con los resultados
    // Por ejemplo, puedes hacer una llamada a una API o buscar en una lista local
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 /*  TODO revisar searchBar
 applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
 */

  
  createEntries(id: number): GridData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
    return {
      selected:false,
      folder: name,
      name: COLORS[Math.round(Math.random() * (COLORS.length - 1)
        )]
    };
  }


}



/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
