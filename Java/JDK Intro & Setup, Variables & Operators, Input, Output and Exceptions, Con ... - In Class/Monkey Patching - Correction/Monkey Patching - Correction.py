'''
class EvenOdd:
    def Even(self):
        print("The number is odd")
    def Odd(self):
        print("The number is even")

Monkey=EvenOdd() #object for the class
'''
class monkeyPatching():
    # Your code here
    def Even(self):
        print("The number is even")
    def Odd(self):
        print("The number is odd")
        
Monkey1 = monkeyPatching()
Monkey.Even = Monkey1.Even
Monkey.Odd = Monkey1.Odd
