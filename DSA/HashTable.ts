type KeyValuePair<K,V> = [K,V];

class HashTable<K extends string, V> {
  private readonly tables: KeyValuePair<K, V>[][];
  private readonly size: number;

  constructor(size: number = 10) {
    this.size = size;
    this.tables = Array.from({ length: size }, () => []);
  }

  public get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.tables[index];

    for (const [k, v] of bucket) {
      if (k === key) {
        return v;
      }
    }
    return undefined;
  }

  public set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.tables[index];

    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  public remove(key: K): void {
    const index = this.hash(key);
    const bucket = this.tables[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }

  private hash(key: K): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

}