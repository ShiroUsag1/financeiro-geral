import { Component } from '@angular/core';
import { ControleServidorContract } from '@shaenkan/server-contract-library';
import { DataGridHeader } from '../../../../../commons/src/lib/models/DataGridHeader';
import { DataGridIcons } from '../../../../../commons/src/lib/models/DataGridIcons';
import { MockFinanceiro } from '../../model/mockFinanceiro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatagridComponent } from '../../../../../commons/src/lib/components/datagrid/datagrid.component';
import { FiltroPesquisaComponent } from "../../../../../commons/src/lib/components/filtro-pesquisa/filtro-pesquisa.component";

@Component({
  selector: 'app-aba-financeiro-geral',
  standalone: true,
  imports: [CommonModule, FormsModule, DatagridComponent, FiltroPesquisaComponent],
  templateUrl: './aba-financeiro-geral.component.html',
  styleUrl: './aba-financeiro-geral.component.scss'
})
export class AbaFinanceiroGeralComponent {
  showBox = false;
  icons: DataGridIcons[] = MockFinanceiro.getIcons();
  searchTerm: string = '';
  header: DataGridHeader[] = MockFinanceiro.getHeader();

  abrirModal(){
    document.querySelector('.formbotao')['click']();
  }

  getImage(){
    return ControleServidorContract.getAssetsFolder();
  }

  getDados() {
    return MockFinanceiro.dadosFinanceiros();
  }
}
