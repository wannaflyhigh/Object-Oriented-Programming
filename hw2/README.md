# 作業二

## 操作說明

```bash
python3 hw3.a.py
```

## 1a

Question:A is a subclass of B. A implements an interface C which is used by D
to access A. B is associated with one or more Es.

![./1a.png](./1a.png)

## 2

This would break abstraction and seriously degrade the code maintainability. Once developer wants to use getArea() with all shapes, it can't work correctly with Square, and Shape is no longer obey polymorphism.
