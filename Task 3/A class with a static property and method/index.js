// In JavaScript, a static property is a property that belongs to a class (rather than an instance of the class) and can be accessed without creating an instance of the class. A static property is declared using the static keyword before the property name. 


class MyClass {
    // Declare a static property
    static myProperty = 'car';
  
    // Declare a method
    myMethod() {
      // Access the static property within the method
      console.log(MyClass.myProperty);
    }
  }
  
  // Access the static property outside of the class
  console.log(MyClass.myProperty);
  
  // Create an instance of the class
  const myInstance = new MyClass();
  
  // Access the method of the instance
  myInstance.myMethod();
  
  
  // In this Task, I used the 'myProperty' property is declared as a static property of the "MyClass" class using the static keyword. This property can be accessed both inside and outside of the class using the class name (e.g., "MyClass"."myProperty"). In addition, the "myMethod" method is declared within the "MyClass" class. This method can access the static "myProperty" property using the class name (e.g., "MyClass"."myProperty") within the method.