class Animal:
    def __init__(self, name):
        self.name = name
    def sleep(self):
        print(f"{self.name} is sleeping.")
        
class Pet:
    def __init__(self, name):
        self.name = name
    def play(self):
        print(f"{self.name} is playing.")
    def takeForWalk(self):
        print(f"{self.name} is being taken for a walk.")


class Pachyderm(Animal):
    def roam(self):
        print(f"{self.name} is roaming.")


class Feline(Animal):
    def roam(self):
        print(f"{self.name} is roaming.")


class Canine(Animal):
    def roam(self):
        print(f"{self.name} is roaming.")


class Hippo(Pachyderm):
    def makeNoise(self):
        print(f"{self.name} is making noise.")


class Rhino(Pachyderm):
    def makeNoise(self):
        print(f"{self.name} is making noise.")


class Elephant(Pachyderm):
    def makeNoise(self):
        print(f"{self.name} is making noise.")


class Tiger(Feline):
    def makeNoise(self):
        print(f"{self.name} is making noise.")


class Cat(Feline, Pet):
    def makeNoise(self):
        print(f"{self.name} is making noise.")


class Lion(Feline):
    def makeNoise(self):
        print(f"{self.name} is making noise.")


class Dog(Canine):
    def makeNoise(self):
        print(f"{self.name} is making noise.")


class Wolf(Canine):
    def makeNoise(self):
        print(f"{self.name} is making noise.")


hippo = Hippo("popo")
hippo.sleep()
hippo.roam()
hippo.makeNoise()


cat = Cat("mimi")
cat.sleep()
cat.roam()
cat.makeNoise()
cat.play()
cat.takeForWalk()
