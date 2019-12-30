###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################

# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
#
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!

# There are a few things you will have to discover for yourself for this game!
# Here are some useful hints:

def create_code():
    import random
    digits = list(range(10))
    random.shuffle(digits)
    return digits[:3]


def guess():
    return list(input("What is your guess?"))

# Think about how you will compare the input to the random number, what format
# should they be in? Maybe some sort of sequence? Watch the Lecture video for more hints!

def get_clues(code, guess):
    ans = [str(d) for d in code]
    if guess == ans:
        return ["You got it right!"]
    clues = []
    guess_digits = [int(n) for n in guess]
    close = 0
    match = 0
    for i,v in enumerate(guess_digits):
        if code[i] == v:
            clues.append("Match: You've guessed a correct number in the correct position")
            match += 1
        elif v in code and code[i] != v:
            clues.append("Close: You've guessed a correct number but in the wrong position")
            close +=1
    if close + match == 0:
        clues.append("Nope: You haven't guess any of the numbers correctly")
    return clues

code = create_code()
clues = None

while clues != ["You got it right!"]:
    g = guess()
    clues = get_clues(code, g)
    for clue in clues:
        print(clue)