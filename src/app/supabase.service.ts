import { Injectable } from '@angular/core';
import {
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js'
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  async getGrupoPlanos() {
        const { data, error } = await this.supabase
        .from('grupo_plano')
        .select('nome, icon, plano!inner(nome, codigo)')

        if(data) return data;
        else return;
  }

  async getPlanos() {
    const { data, error } = await this.supabase
    .from('plano')
    .select()

    if(data) return data;
    else return;
  }

  async getTipoEstabelcimento() {
    const { data, error } = await this.supabase
    .from('tipo_estabelecimento')
    .select()

    if(data) return data;
    else return;
  }

  async getEspecialidade() {
    const { data, error } = await this.supabase
    .from('especialidade')
    .select()

    if(data) return data;
    else return;
  }

  async getProcedimento() {
    const { data, error } = await this.supabase
    .from('procedimento')
    .select()

    if(data) return data;
    else return;
  }

  async getPrestador() {
    const { data, error } = await this.supabase
    .from('prestador')
    .select()

    if(data) return data;
    else return;
  }

  async getPrestadorById(id: number) {
    const { data, error } = await this.supabase
    .from('prestador')
    .select()
    .eq('id', id)

    if(data) return data;
    else return;
  }
}
