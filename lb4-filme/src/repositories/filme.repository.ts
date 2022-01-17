import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Filme, FilmeRelations, Receita} from '../models';
import {ReceitaRepository} from './receita.repository';

export class FilmeRepository extends DefaultCrudRepository<
  Filme,
  typeof Filme.prototype.id,
  FilmeRelations
> {

  public readonly receitas: HasManyRepositoryFactory<Receita, typeof Filme.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ReceitaRepository') protected receitaRepositoryGetter: Getter<ReceitaRepository>,
  ) {
    super(Filme, dataSource);
    this.receitas = this.createHasManyRepositoryFactoryFor('receitas', receitaRepositoryGetter,);
    this.registerInclusionResolver('receitas', this.receitas.inclusionResolver);
  }
}
