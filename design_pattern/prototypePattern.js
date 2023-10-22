// Đối tượng gốc (Prototype)
class Animal {
    constructor(species, sound) {
      this.species = species;
      this.sound = sound;
    }
  
    // Phương thức sao chép đối tượng (clone)
    clone() {
      // Sử dụng Object.create để tạo một bản sao của đối tượng hiện tại
      return Object.create(this);
    }
  
    makeSound() {
      console.log(`${this.species} kêu: ${this.sound}`);
    }
  }
  
  // Tạo đối tượng gốc
  const dog = new Animal("Chó", "Gâu gâu");
  
  // Sao chép đối tượng gốc để tạo ra đối tượng mới
  const clonedDog = dog.clone();
  clonedDog.makeSound(); // Output: Chó kêu: Gâu gâu
  