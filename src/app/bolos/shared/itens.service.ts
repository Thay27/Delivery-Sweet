import { AngularFireStorage } from '@angular/fire/storage';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  bolosRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
    this.bolosRef = this.db.list('bolos/');
   }

  insert(bolos: any) {
    // return this.produtosRef.push(produto);
    return this.save(bolos, null);
  }

  update(bolos: any, key: string) {
    // return this.produtosRef.update(key, produto);
    return this.save(bolos, key);
  }

  private save(bolos: any, key: string) {
    return new Promise( (resolve, reject) => {
      const bolosRef = {
        nome: bolos.nome,
        preco: bolos.preco,
        montagemKey: bolos.montagemKey,
        montagemNome: bolos.montagemNome,
      }

      if (key) {
        this.bolosRef.update(key, bolosRef)
          .then( () => resolve(key) )
          .catch( () => reject() );
      } else {
        this.bolosRef.push(bolosRef)
          .then( (result: any) => resolve(result.key));
      }

    });
  }

  getAll() {
    return this.bolosRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }))
      })
    )
  }

  getByKey(key: string) {
    const path = 'bolos/'+key;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val() });
      })
    );

  }


  remove(key: string, filePath: string) {
    this.bolosRef.remove(key);
    }
  }
