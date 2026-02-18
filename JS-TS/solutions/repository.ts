export class InMemoryRepository<T extends { id: number }> {
  // private storage
  private items: T[] = [];

  add(entity: T): T {
    if (entity == null) {
      throw new Error("can't throw in null")
    }

    this.items.push(entity);
    return entity;
  }

  update(id: number, patch: Partial<T>): T {
    const index = this.items.findIndex(obj => obj.id === id);
    if (index === -1) {
      throw new Error(`no such element with id : ${id}`)
    }

    this.items[index] = { ...this.items[index], ...patch } as T
    return this.items[index] as T
  }

  remove(id: number): void {
    const index = this.items.findIndex(obj => obj.id === id);

    if (index === -1)
      throw new Error(`no such element with id ${id}`);
    this.items.splice(index, 1);
  }

  findById(id: number): T | undefined {
    return this.items.find(o => o.id === id);
  }

  findAll(): T[] {
    return [...this.items]
  }
}
