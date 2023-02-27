import csv
import json

cooccurrence = {}

# Read the CSV file and create a co-occurrence matrix
with open('../result4.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for row in reader:
        authors = [author.strip() for author in row[1].split(',') if author.strip()]
        for i in range(len(authors)):
            for j in range(i+1, len(authors)):
                pair = tuple(sorted([authors[i], authors[j]]))
                if pair in cooccurrence:
                    cooccurrence[pair] += 1
                else:
                    cooccurrence[pair] = 1

# Convert the co-occurrence matrix to a list of pairs with weights
pairs = [[pair[0], pair[1], weight] for pair, weight in cooccurrence.items() if weight > 10]

# Write the co-occurrence data to a JSON file
with open('cooccurrence.json', 'w') as outfile:
    json.dump(pairs, outfile)
