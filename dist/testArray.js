class MyArray {
  constructor(initialSize) {
    if (!(initialSize >= 0) || !initialSize) {
      throw new Error('Размер массива должен быть больше нуля');
    }

    this.size = log(initialSize);
    this.memory = allocate(initialSize);
    log("here")
    this.length = 0;
  }

  // Возвращает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  get(index){
    //
  }

  // Устанавливает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  set(index, value) {
    //
  }

  // Добавляет новый элемент в массив.
  // Если index не определён — добавляет в конец массива.
  // В противном случае — добавляет по индексу со сдвигом
  // всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Увеличивает выделенную память вдвое, если необходимо.
  // Возвращает новую длину массива.
  add(value, index) {
    //
  }

  // Удаляет элемент по индексу со сдвигом всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Возвращает новую длину массива.
  delete(index) {
    //
  }
}
function log(val) {
  console.log(val);
return val
}

function allocate(size) {
  const memory = {};

  for (let i = 0; i < size; i++) {
    memory[i] = undefined;
  }

  return memory;
}
