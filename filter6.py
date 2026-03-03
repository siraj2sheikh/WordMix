with open("words_alpha.txt", "r") as f:
    words = f.read().splitlines()

six_letter_words = [w for w in words if len(w) == 6]

with open("six_letter_words.txt", "w") as f:
    f.write(",".join(six_letter_words))

print(f"Saved {len(six_letter_words)} words to six_letter_words.txt")