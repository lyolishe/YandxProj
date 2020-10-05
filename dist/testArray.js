class MyArray {
  constructor(initialSize) {
    if (initialSize === undefined || initialSize < 0) {
      throw new Error('Размер массива должен быть больше нуля');
    }

    this.size = initialSize;
    this.memory = allocate(initialSize);

    this.length = 0;
  }


  checkIndex(index) {
    if (index!== undefined && (index >= 0 && index <= this.length)){
      return true
    } else {
      throw new Error("Некорректный индекс массива")
    }
  }
  // Возвращает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  get(index){
    if (this.checkIndex(index)) {
      return this.memory[index];
    }
  }


  // Устанавливает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  set(index, value) {
    if (this.checkIndex(index)) {
      this.memory[index] = value;
    }
  }

  // Добавляет новый элемент в массив.
  // Если index не определён — добавляет в конец массива.
  // В противном случае — добавляет по индексу со сдвигом
  // всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Увеличивает выделенную память вдвое, если необходимо.
  // Возвращает новую длину массива.
  add(value, index) {
    if (this.checkIndex(index? index : this.length)) {

      if (this.length === this.size) {
        this.size = 2 * this.size
        //Выделяю НОВУЮ область памяти
        const newMemory = allocate(this.size)
        //Копирую старые значения в новую область мамяти
        Object.keys(this.memory).forEach(i => {
          newMemory[i] = this.memory[i];
        });
        this.memory = newMemory
      }

      if(index !== undefined) {
        //если есть индекс, смотрю что он затирает ли он что-то
        const replaced = this.memory[index]

        if (replaced !== undefined) {
          for (let i = this.length+1; i !== index; i--) {
            this.memory[i] = this.memory[i-1];
          }
        }
        this.memory[index] = value;
      } else {
        //индекса нет - пишу в конец массива
        this.memory[this.length] = value
      }
      this.length++
    }
    return this.length
  }

  // Удаляет элемент по индексу со сдвигом всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Возвращает новую длину массива.
  delete(index) {
    if (this.checkIndex(index) && this.memory[index] !== undefined) {
      //если есть индекс, и он хорош - перетираю каждое значение, начиная с него, значением с права
      for (let i = index; i!== this.length; i++) {
        this.memory[i] = this.memory[i+1];
      }
      //последнее перетираю ручками
      this.memory[this.length] = undefined;
      this.length--
    }
    return this.length
  }
}

function allocate(size) {
  const memory = {};

  for (let i = 0; i < size; i++) {
    memory[i] = undefined;
  }

  return memory;
}
const newOne = new MyArray(5)
console.log(newOne)
