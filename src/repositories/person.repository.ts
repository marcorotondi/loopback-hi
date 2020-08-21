import {DefaultCrudRepository} from '@loopback/repository';
import {Person, PersonRelations} from '../models';
import {PersonDatasource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.id,
  PersonRelations
> {
  constructor(
    @inject('datasources.PersonDatasource') dataSource: PersonDatasource,
  ) {
    super(Person, dataSource);
  }
}
