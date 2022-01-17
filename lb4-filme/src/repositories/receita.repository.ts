import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Receita, ReceitaRelations, Filme} from '../models';
import {FilmeRepository} from './filme.repository';

export class ReceitaRepository extends DefaultCrudRepository<
  Receita,
  typeof Receita.prototype.id,
  ReceitaRelations
> {

  public readonly filme: BelongsToAccessor<Filme, typeof Receita.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FilmeRepository') protected filmeRepositoryGetter: Getter<FilmeRepository>,
  ) {
    super(Receita, dataSource);
    this.filme = this.createBelongsToAccessorFor('filme', filmeRepositoryGetter,);
    this.registerInclusionResolver('filme', this.filme.inclusionResolver);
  }
}
