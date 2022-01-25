def maxIntegers(a, b, c):
    # Your code here
    if (a >= b) and (a >= c):
        largest = a
    elif (b >= a) and (b >= c):
        largest = b
    else:
        largest = c
    print (largest)
