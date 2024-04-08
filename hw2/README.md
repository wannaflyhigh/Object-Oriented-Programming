# 作業二

## 操作說明

```bash
python3 hw3.a.py
```

## 1a

Question:A is a subclass of B. A implements an interface C which is used by D
to access A. B is associated with one or more Es.

![./1a.png](./1a.png)

## 1b

Question:A CargoPlane aggregates zero or more Pallets. Each Pallet aggregates zero or more Boxes. A CargoPlane is composed of one or more Parts. Each Box contain one or more Items that are accessed by part numbers.

![./1b.png](./1b.png)

## 1c

Question:A University is composed of one or more Units, such as Colleges and Schools. Each Unit contains Faculty, Students, and Staff. A Unit maintains an AddressBook filled with Entries, and one Entry for each type of Person contained in that Unit. An Entry can be located in the AddressBook by supplying their last
Name or their UniversityId. Faculty members can be the adviser of zero or more Students.

![./1c.png](./1c.png)

## 2

This would break abstraction and seriously degrade the code maintainability. Once developer wants to use getArea() with all shapes, it can't work correctly with Square, and Shape is no longer obey polymorphism.
