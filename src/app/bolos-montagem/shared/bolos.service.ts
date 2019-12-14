import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BolosService {
  montagemRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.montagemRef = this.db.list('bolos-montagem/');
  }

  insert(categoria: any) {
    return this.montagemRef.push(categoria);
  }

  // update(categoria: any, key: string) {
  //   this.categoriasRef.update(key,categoria);
  // }

  update(montagem: any, key: string) {
    let updateObj = {}
    const path = 'bolos-montagem/' + key;
    const pathp = 'bolos/';
    updateObj[path] = montagem;

    const subscribe = this.getProdutosByCategoria(key).subscribe(bolos => {
      subscribe.unsubscribe();

      bolos.forEach(bolos => {
        updateObj[`${pathp}${bolos.key}/montagemNome`] = montagem.nome;
      });

    });
  }

  getAll() {
    return this.montagemRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }))
      })
    )
  }

  getByKey(key: string) {
    const path = 'bolos-montagem/' + key;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val() });
      })
    );

  }

  getProdutosByCategoria(key: string) {
    return this.db.list('bolos/', q => q.orderByChild('montagemKey').equalTo(key))
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(m => ({ key: m.key }))
        })
      )
  }

  remove(key: string) {
    return new Promise((resolve, reject) => {
      const subscribe = this.getProdutosByCategoria(key).subscribe((bolos: any) => {
        subscribe.unsubscribe();

        if (bolos.length == 0) {
          return this.montagemRef.remove(key);

        } else {
          reject('Não é possível excluir a categoria pois ela tem produtos associados.')
        }
      });
    });
  }


}
