# user3 : [0,0,1,1,0,1,1,0,0,0,1,1,0],
import random
def ran():
    n = random.randint(0,1)
    return n
for i in range(50):
    print(f"user{5+i} = [{ran()},{ran()},{ran()},{ran()},{ran()},{ran()},{ran()},{ran()},{ran()},{ran()},{ran()},{ran()},{ran()}],")