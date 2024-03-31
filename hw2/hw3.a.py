class Animal:
    def __init__(self, name):
        self.name = name
    def sleep(self):
        print(f"{self.name} is sleeping.")
    def play(self):
        print(f"{self.name} is playing.")
    def takeForWalk(self):
        print(f"{self.name} is being taken for a walk.")
    def makeNoise():
        print("aaa")
class Pachyderm(Animal):
    def roam():
        print("roam")
class Feline(Animal):
    def roam():
        print("roam")
class Canine(Animal):
    def roam():
        print("roam")

class Rhino(Pachyderm):
    pass        
class Hippo(Pachyderm):
    pass
class Elephant(Pachyderm):
    pass

class Cat(Feline):
    pass
class Tiger(Feline):
    pass
class Lion(Feline):
    pass
class Dog(Canine):
    pass
class Wolf(Canine):
    pass


dog = Dog("brave")
dog.play()
dog.takeForWalk()

cat = Cat("mimi")
cat.play()
cat.takeForWalk()
