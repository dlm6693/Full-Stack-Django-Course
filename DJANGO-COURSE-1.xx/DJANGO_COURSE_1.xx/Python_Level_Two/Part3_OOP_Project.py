#####################################
### WELCOME TO YOUR OOP PROJECT #####
#####################################

# For this project you will be using OOP to create a card game. This card game will
# be the card game "War" for two players, you an the computer. If you don't know
# how to play "War" here are the basic rules:
#
# The deck is divided evenly, with each player receiving 26 cards, dealt one at a time,
# face down. Anyone may deal first. Each player places his stack of cards face down,
# in front of him.
#
# The Play:
#
# Each player turns up a card at the same time and the player with the higher card
# takes both cards and puts them, face down, on the bottom of his stack.
#
# If the cards are the same rank, it is War. Each player turns up three cards face
# down and one card face up. The player with the higher cards takes both piles
# (six cards). If the turned-up cards are again the same rank, each player places
# another card face down and turns another card face up. The player with the
# higher card takes all 10 cards, and so on.
#
# There are some more variations on this but we will keep it simple for now.
# Ignore "double" wars
#
# https://en.wikipedia.org/wiki/War_(card_game)

from random import shuffle

# Two useful variables for creating Cards.


class Deck():
    """
    This is the Deck Class. This object will create a deck of cards to initiate
    play. You can then use this Deck list of cards to split in half and give to
    the players. It will use SUITE and RANKS to create the deck. It should also
    have a method for splitting/cutting the deck in half and Shuffling the deck.
    """
    SUITE = 'H D S C'.split()
    RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()
    def __init__(self):
        self.cards = [(s,r) for s in Deck.SUITE for r in Deck.RANKS]
    
    def cards(self):
        return self.cards
    
    def shuffle_and_split(self):
        half = int(len(self.cards)/2)
        shuffle(self.cards)
        return self.cards[:half], self.cards[half:]  
    

class Hand():
    '''
    This is the Hand class. Each player has a Hand, and can add or remove
    cards from that hand. There should be an add and remove card method here.
    '''
    def __init__(self, cards):
        self.cards = cards
        
    def remove(self, card):
        self.cards.pop(self.cards.index(card))
    
    def add(self, cards):
        self.cards.extend(cards)

class Player():
    """
    This is the Player class, which takes in a name and an instance of a Hand
    class object. The Payer can then play cards and check if they still have cards.
    """
    def __init__(self, name, hand):
        self.name = name
        self.hand = hand
    
    def play_card(self):
        card = self.hand.cards[0]
        self.hand.remove(card)
        print(f"{self.name} has played a card")
        return card
        
    def has_cards(self):
        if len(self.hand.cards) > 0:
            return True
        else:
            return False


######################
#### GAME PLAY #######
######################
print("Welcome to War, let's begin...")
p1_name = input("Player 1: Please enter your name.")
p2_name = input("Player 2: Please enter your name.")
deck = Deck()
cards1, cards2 = deck.shuffle_and_split()
hand1 = Hand(cards = cards1)
hand2 = Hand(cards = cards2)
p1 = Player(name=p1_name, hand=hand1)
p2 = Player(name=p2_name, hand=hand2)
ranks = {k:v for v,k in enumerate(Deck.RANKS)}
rounds = 0
wars = 0
double_wars = 0
ties = 0
# Use the 3 classes along with some logic to play a game of war!
while p1.has_cards() and p2.has_cards():
    rounds +=1
    p1_card = p1.play_card()
    p2_card = p2.play_card()
    p1_card_rank = ranks[p1_card[1]]
    p2_card_rank = ranks[p2_card[1]]
    if p1_card_rank > p2_card_rank:
        hand1.add([p1_card, p2_card])
        print(f"{p1.name} won round {rounds} straight up!")
    elif p2_card_rank > p1_card_rank:
        hand2.add([p2_card, p1_card])
        print(f"{p2.name} won round {rounds} straight up!")
    elif p1_card_rank == p2_card_rank:
        print("Both players have the same hand. Time to go to war!")
        wars += 1
        face_down_p1 = [p1.play_card(), p1.play_card(), p1.play_card()]
        face_down_p2 = [p2.play_card(), p2.play_card(), p2.play_card()]
        face_up_p1 = p1.play_card()
        face_up_p2 = p2.play_card()
        fup1_rank = ranks[face_up_p1[1]]
        fup2_rank = ranks[face_up_p2[1]]
        card_haul = [face_up_p1, face_up_p2, p1_card, p2_card] + face_down_p1 + face_down_p2
        if fup1_rank > fup2_rank:
            print(f"{p1.name} won the war in round {round}!")
            hand1.add(card_haul)
        elif fup2_rank > fup1_rank:
            print(f"{p2.name} won the war in round {round}!")
            hand2.add(card_haul)
        elif fup1_rank == fup2_rank:
            double_wars += 1
            print("Wow double war!!")
            fd_p1 = p1.play_card()
            fd_p2 = p2.play_card()
            fu_p1 = p1.play_card()
            fu_p2 = p2.play_card()
            card_haul.extend([fd_p1, fd_p2, fu_p1, fu_p2])
            if ranks[fu_p1[1]] > ranks[fu_p2[1]]:
                print(f"{p1.name} won the double war in round {round}!")
                hand1.add(card_haul)
            elif ranks[fu_p2[1]] > ranks[fu_p1[1]]:
                print(f"{p2.name} won the double war in round {round}!")
                hand2.add(card_haul)
            else:
                ties += 1
                print("Its a tie in round {round}! Both players get their played cards back.")
                p1_haul = [face_up_p1, p1_card, fd_p1, fu_p1] + face_down_p1
                p2_haul = [face_up_p2, p2_card, fd_p2, fu_p2] + face_down_p2
                hand1.add(p1_haul)
                hand2.add(p2_haul)
                
winner = None
if not p1.has_cards():
    winner = p2_name
elif not p2.has_cards():
    winner = p1_name
print(f"The game is over. It lasted {rounds} rounds. There were {wars} wars, {double_wars} double wars and {ties} ties!")
print(f"Congratulations {winner} you've won!")    